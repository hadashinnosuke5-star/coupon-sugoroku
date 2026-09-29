export type CouponType =
  | 'discount'
  | 'free'
  | 'retry'
  | 'none'
  | 'special'

export type Coupon = {
  id: string
  title: string
  description: string
  type: CouponType
}

export type BoardSquare = {
  id: number
  label: string
  shortLabel: string
  effectLabel: string
  icon?: string
  x: number
  y: number
  coupon: Coupon
  accent?: boolean
}
