// node imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// own implementation
import store from './util/store'
import './index.css'
import App from './components/App/App'
import registerServiceWorker from './util/registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
