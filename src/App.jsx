import { useState } from 'react'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [inputValue, setInputValue] = useState('')
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <>
      <h1>Welcome to Pixel Pulse Studios - Taylor Vorlop</h1>
    </>
  )
}

export default App
