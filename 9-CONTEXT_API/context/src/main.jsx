import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleStyleContextProvider } from './context/TitleStyleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
        <TitleStyleContextProvider>
            <App />
        </TitleStyleContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
