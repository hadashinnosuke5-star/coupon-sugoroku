'use client'

import { motion } from 'framer-motion'
import { BOARD_SQUARES } from '@/lib/game-config'

type Props = {
  position: number
}

export default function Board({ position }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {BOARD_SQUARES.map((square) => (
        <div
          key={square.id}
          className="relative flex min-h-28 items-center justify-center rounded-2xl border border-black/5 bg-white p-3 text-center font-bold shadow-sm"
        >
          <span>{square.label}</span>

          {position === square.id && (
            <motion.div
              layoutId="player"
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="absolute -right-2 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-300 text-2xl shadow-md"
            >
              🐰
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
