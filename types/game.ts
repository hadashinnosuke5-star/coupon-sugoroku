export type Coupon = {
  id: string
  title: string
  description: string
  type: 'discount' | 'free' | 'retry' | 'none' | 'special'
}

export type BoardSquare = {
  id: number
  label: string
  coupon: Coupon
}
