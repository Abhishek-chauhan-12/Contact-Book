import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import store from '../src/Redux/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root'),
)