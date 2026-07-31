import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// import.meta.env.BASE_URL comes from Vite's `base` config (see vite.config.js).
// Passing it as the router's basename keeps all <Link> / route paths correct
// no matter what sub-path the app is deployed under.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
