import { useState } from 'react'
import commands from '/data/commands'
import Home from '/components/home'
import About from '/components/about'
import Skills from '/components/skills'
import Contact from '/components/contact'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [input, setInput] = useState('')
  const [expandedProject, setExpandedProject] = useState(null)

  const match = commands.find((command) => input === command.name)

  return (
    <>
      {currentView === 'home' && <Home />}
      {currentView === 'about' && <About />}
      {currentView === 'skills' && <Skills />}
      {currentView === 'contact' && <Contact />}
      <br />
      <br />
      <label>
        <span style={{ color: 'magenta' }}>taylor</span>
        @pixel-pulse-studios:~${' '}
        <input
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            width: '32ch',
          }}
          placeholder="[Type Command or click above...]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (match) {
                setCurrentView(match.output)
                setInput('')
              }
            }
          }}
        />
      </label>
    </>
  )
}

export default App
