import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource-variable/inter'
import '@fontsource-variable/syne'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/nunito'
import '@fontsource-variable/sora';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/geist'
import '@fontsource-variable/figtree'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource/bebas-neue'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
  
)
