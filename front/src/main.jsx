import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CursorContextProvider } from './components/context/CursorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorContextProvider>
      <App />
    </CursorContextProvider>
  </StrictMode>,
)
