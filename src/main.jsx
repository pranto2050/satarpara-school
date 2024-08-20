import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Header from './Components/index.jsx'
import Main from './Components/main_section.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Main />

  </StrictMode>,
)
