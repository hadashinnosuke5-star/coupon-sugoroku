import type { BoardSquare } from '@/types/game'

export const BOARD_SQUARES: BoardSquare[] = [
  {
    id: 0,
    label: 'START',
    coupon: {
      id: 'start',
      title: 'スタート',
      description: 'ここからゲーム開始',
      type: 'none',
    },
  },
  {
    id: 1,
    label: '100円OFF',
    coupon: {
      id: 'coupon-100',
      title: '100円OFF',
      description: 'お会計から100円引き',
      type: 'discount',
    },
  },
  {
    id: 2,
    label: 'ハズレ',
    coupon: {
      id: 'lose',
      title: '今回はハズレ',
      description: '次回また挑戦してね',
      type: 'none',
    },
  },
  {
    id: 3,
    label: 'ドリンク無料',
    coupon: {
      id: 'drink-free',
      title: 'ドリンク1杯無料',
      description: '対象ドリンクから1杯無料',
      type: 'free',
    },
  },
  {
    id: 4,
    label: '300円OFF',
    coupon: {
      id: 'coupon-300',
      title: '300円OFF',
      description: 'お会計から300円引き',
      type: 'discount',
    },
  },
  {
    id: 5,
    label: 'もう1回',
    coupon: {
      id: 'retry',
      title: 'もう1回',
      description: 'もう一度サイコロを振れます',
      type: 'retry',
    },
  },
  {
    id: 6,
    label: '500円OFF',
    coupon: {
      id: 'coupon-500',
      title: '500円OFF',
      description: 'お会計から500円引き',
      type: 'discount',
    },
  },
  {
    id: 7,
    label: '大当たり',
    coupon: {
      id: 'special',
      title: '30分無料',
      description: '対象店舗で30分無料',
      type: 'special',
    },
  },
]

export const MAX_POSITION = BOARD_SQUARES.length - 1
