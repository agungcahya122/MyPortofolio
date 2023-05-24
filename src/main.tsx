import ReactDOM from 'react-dom/client'
import React from 'react'


import App from './routes/index.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
