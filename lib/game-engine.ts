import { MAX_POSITION } from '@/lib/game-config'

export function rollDiceValue() {
  return Math.floor(Math.random() * 6) + 1
}

export function getNextPosition(current: number, dice: number) {
  return Math.min(current + dice, MAX_POSITION)
}
