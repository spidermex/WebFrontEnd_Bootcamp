import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameSettingsProvider } from './context/GameSettingsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameSettingsProvider>
      <App />
    </GameSettingsProvider>
  </React.StrictMode>,
)
