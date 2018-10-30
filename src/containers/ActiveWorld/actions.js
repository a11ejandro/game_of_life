import { WORLD_RANDOM_SET, WORLD_TICK } from './constants'


export function setRandomWorld () {
  return {
    type: WORLD_RANDOM_SET
  }
}

export function tickWorld () {
  return {
    type: WORLD_TICK
  }
}
