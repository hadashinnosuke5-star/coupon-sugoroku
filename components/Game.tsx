'use client'

import { useState } from 'react'
import Board from '@/components/Board'
import Dice from '@/components/Dice'
import CouponModal from '@/components/CouponModal'
import { BOARD_SQUARES } from '@/lib/game-config'
import { getNextPosition, rollDiceValue } from '@/lib/game-engine'
import type { Coupon } from '@/types/game'

export default function Game() {
  const [position, setPosition] = useState(0)
  const [dice, setDice] = useState<number | null>(null)
  const [rolling, setRolling] = useState(false)
  const [coupon, setCoupon] = useState<Coupon | null>(null)

  async function handleRoll() {
    if (rolling) return

    setRolling(true)
    setCoupon(null)

    await new Promise((resolve) => setTimeout(resolve, 900))

    const value = rollDiceValue()
    const nextPosition = getNextPosition(position, value)

    setDice(value)
    setPosition(nextPosition)

    await new Promise((resolve) => setTimeout(resolve, 650))

    setCoupon(BOARD_SQUARES[nextPosition].coupon)
    setRolling(false)
  }

  function handleReset() {
    setPosition(0)
    setDice(null)
    setCoupon(null)
    setRolling(false)
  }

  return (
    <>
      <section className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pink-500">
            COUPON GAME
          </p>
          <h1 className="mt-2 text-3xl font-black">クーポンすごろく</h1>
          <p className="mt-2 text-sm text-gray-500">
            サイコロを振って、止まったマスのクーポンをGET
          </p>
        </div>

        <Board position={position} />

        <div className="mt-8">
          <Dice value={dice} rolling={rolling} />

          <button
            onClick={handleRoll}
            disabled={rolling}
            className="mt-6 w-full rounded-2xl bg-black px-5 py-4 text-lg font-black text-white shadow-lg transition disabled:opacity-50"
          >
            {rolling ? 'サイコロ回転中...' : 'サイコロを振る'}
          </button>

          <button
            onClick={handleReset}
            className="mt-4 w-full rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-bold"
          >
            最初からやり直す
          </button>
        </div>
      </section>

      <CouponModal coupon={coupon} onClose={() => setCoupon(null)} />
    </>
  )
}
