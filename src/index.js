import React from 'react'
import ReactDOM from 'react-dom'

import'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx'

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>,
document.getElementById('root'))