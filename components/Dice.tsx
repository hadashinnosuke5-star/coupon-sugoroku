'use client'

import { motion } from 'framer-motion'

type Props = {
  value: number | null
  rolling: boolean
}

const DICE_FACE: Record<number, string> = {
  1: '⚀',
  2: '⚁',
  3: '⚂',
  4: '⚃',
  5: '⚄',
  6: '⚅',
}

export default function Dice({ value, rolling }: Props) {
  return (
    <motion.div
      animate={
        rolling
          ? {
              rotate: [0, 360, 720, 1080],
              scale: [1, 1.15, 0.9, 1],
            }
          : {}
      }
      transition={{ duration: 0.9 }}
      className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-7xl shadow-xl"
    >
      {value ? DICE_FACE[value] : '🎲'}
    </motion.div>
  )
}
