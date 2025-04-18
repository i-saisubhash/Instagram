import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Instagram from './INSTAGRAM'
import Login from './Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Instagram />

  </StrictMode>,
)
