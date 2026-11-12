import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="app">
      <iframe
        className="legacy-page"
        src="./iching-najia.html"
        title="易經納甲裝卦系統"
      />
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
