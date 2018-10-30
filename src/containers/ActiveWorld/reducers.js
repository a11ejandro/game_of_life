import { WORLD_RANDOM_SET, WORLD_TICK } from './constants'
import * as Game  from './Game'

let defaultGame = {
  world: []
}

function world (state = defaultGame, action) {
  if (action.type) {
    switch (action.type) {
      case WORLD_RANDOM_SET:
        return {
          ...state,
          world: Game.createRandomWorld()
        }
      case WORLD_TICK:
        return {
          ...state,
          world: Game.tick(state.world)
        }
      default:
        return state
    }
  }
  return state
}

export default world
