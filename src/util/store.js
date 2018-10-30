import { createStore, compose } from 'redux'
import worldReducer from '../containers/ActiveWorld/reducers'

const defaultState = {
  world: []
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

if (module.hot) {
  module.hot.accept('../containers/ActiveWorld/reducers', () => {
    const nextRootReducer = require('../containers/ActiveWorld/reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

const store = createStore(worldReducer, defaultState, enhancers)

export default store
