import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import {ReactLenis} from 'lenis/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReactLenis>
  </StrictMode>,
)
