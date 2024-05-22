import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* Enclose the app in router to use the browser router feature */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)