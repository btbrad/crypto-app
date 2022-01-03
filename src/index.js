import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import App from './App'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    <App/>
  </Router>, 
document.querySelector('#root'))