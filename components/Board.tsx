'use client'

import { motion } from 'framer-motion'
import { BOARD_SQUARES } from '@/lib/game-config'

type Props = {
  position: number
}

const TILE_COLORS = [
  'bg-[#ffd8df]',
  'bg-[#fff0b8]',
  'bg-[#d8f0ff]',
  'bg-[#dff5d7]',
  'bg-[#eadcff]',
]

const DECORATIONS = [
  { left: '7%', top: '8%', value: '☁️', size: 'text-2xl' },
  { left: '82%', top: '8%', value: '☁️', size: 'text-xl' },
  { left: '5%', top: '34%', value: '🌳', size: 'text-3xl' },
  { left: '88%', top: '42%', value: '🏠', size: 'text-3xl' },
  { left: '4%', top: '69%', value: '🌷', size: 'text-2xl' },
  { left: '86%', top: '74%', value: '🎈', size: 'text-2xl' },
  { left: '13%', top: '91%', value: '🌳', size: 'text-3xl' },
  { left: '78%', top: '92%', value: '🏆', size: 'text-3xl' },
]

function tileColor(index: number, accent?: boolean) {
  if (accent) return 'bg-[#ff8fac]'
  return TILE_COLORS[index % TILE_COLORS.length]
}

function connectorStyle(
  from: { x: number; y: number },
  to: { x: number; y: number }
) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const length = Math.sqrt(dx * dx + dy * dy)
  const angle = Math.atan2(dy, dx) * 180 / Math.PI

  return {
    left: `${from.x}%`,
    top: `${from.y}%`,
    width: `${length}%`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: '0 50%',
  }
}

export default function Board({ position }: Props) {
  return (
    <div className="relative aspect-[4/6] w-full overflow-hidden rounded-[32px] border-4 border-[#7a5737] bg-[#bfe8ff] shadow-[0_14px_35px_rgba(70,45,20,0.18)]">
      {/* sky */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#bce9ff] to-[#e8f8ff]" />

      {/* hills */}
      <div className="absolute -left-[12%] top-[21%] h-[24%] w-[72%] rounded-[50%] bg-[#a9d99b]" />
      <div className="absolute right-[-18%] top-[23%] h-[25%] w-[75%] rounded-[50%] bg-[#91cf83]" />

      {/* ground */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] bg-[#f3e4bb]" />

      {/* subtle paper texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(80,50,25,.25) 0 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* title banner */}
      <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-full border-2 border-[#7a5737] bg-white/95 px-5 py-2 text-center shadow">
        <div className="text-[10px] font-black tracking-[0.3em] text-pink-500">
          COUPON SUGOROKU
        </div>
        <div className="text-lg font-black">クーポンすごろく</div>
      </div>

      {/* decorations */}
      {DECORATIONS.map((item, index) => (
        <div
          key={index}
          className={`absolute z-0 ${item.size}`}
          style={{ left: item.left, top: item.top }}
        >
          {item.value}
        </div>
      ))}

      {/* path connectors */}
      {BOARD_SQUARES.slice(0, -1).map((square, index) => {
        const next = BOARD_SQUARES[index + 1]
        return (
          <div
            key={`connector-${square.id}`}
            className="absolute z-[1] h-[12px] rounded-full border-y-2 border-[#9b774d] bg-[#caa86d]"
            style={connectorStyle(square, next)}
          />
        )
      })}

      {/* board tiles */}
      {BOARD_SQUARES.map((square, index) => {
        const active = position === square.id
        const passed = position > square.id

        return (
          <div
            key={square.id}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${square.x}%`,
              top: `${square.y}%`,
            }}
          >
            <motion.div
              animate={
                active
                  ? {
                      scale: [1, 1.08, 1],
                      rotate: [0, -2, 2, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.55 }}
              className={[
                'relative flex h-[62px] w-[74px] flex-col items-center justify-center rounded-[18px] border-[3px] border-[#7a5737] px-1 text-center shadow-[0_5px_0_#7a5737]',
                tileColor(index, square.accent),
                passed ? 'opacity-75' : '',
              ].join(' ')}
            >
              <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#7a5737] bg-white text-[10px] font-black">
                {square.id}
              </div>

              {square.icon && (
                <div className="mb-0.5 text-lg leading-none">{square.icon}</div>
              )}

              <div
                className={[
                  'text-[10px] font-black leading-tight',
                  square.accent ? 'text-white' : 'text-[#4a3424]',
                ].join(' ')}
              >
                {square.shortLabel}
              </div>

              {square.id > 0 && square.id < BOARD_SQUARES.length - 1 && (
                <div className="mt-0.5 text-[8px] font-bold opacity-70">
                  {square.effectLabel}
                </div>
              )}
            </motion.div>
          </div>
        )
      })}

      {/* START flag */}
      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-[120%] text-3xl"
        style={{
          left: `${BOARD_SQUARES[0].x}%`,
          top: `${BOARD_SQUARES[0].y}%`,
        }}
      >
        🚩
      </div>

      {/* GOAL flag */}
      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-[125%] text-4xl"
        style={{
          left: `${BOARD_SQUARES[BOARD_SQUARES.length - 1].x}%`,
          top: `${BOARD_SQUARES[BOARD_SQUARES.length - 1].y}%`,
        }}
      >
        🏁
      </div>

      {/* player */}
      <motion.div
        animate={{
          left: `${BOARD_SQUARES[position].x}%`,
          top: `${BOARD_SQUARES[position].y}%`,
        }}
        transition={{
          type: 'spring',
          stiffness: 210,
          damping: 19,
        }}
        className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-[150%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-yellow-300 text-2xl shadow-xl"
        >
          🐰
        </motion.div>
      </motion.div>

      {/* direction arrows */}
      <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border-2 border-[#7a5737] bg-white/90 px-4 py-1 text-[10px] font-black text-[#6b4b31] shadow">
        START → GOAL
      </div>
    </div>
  )
}
