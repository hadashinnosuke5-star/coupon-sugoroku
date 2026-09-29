'use client'

import { motion } from 'framer-motion'
import type { Coupon } from '@/types/game'

type Props = {
  coupon: Coupon | null
  onClose: () => void
}

export default function CouponModal({ coupon, onClose }: Props) {
  if (!coupon) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
      >
        <div className="mb-2 text-sm text-gray-500">獲得結果</div>
        <h2 className="text-2xl font-black">{coupon.title}</h2>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          {coupon.description}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-black px-4 py-3 font-bold text-white"
        >
          閉じる
        </button>
      </motion.div>
    </div>
  )
}
