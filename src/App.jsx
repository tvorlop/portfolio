import { useState } from 'react'
import commands from '/data/commands'
import Home from '/components/home'
import About from '/components/about'
import Skills from '/components/skills'
import Contact from '/components/contact'
import Projects from '/components/projects'
import AvailableCommands from '/components/availableCommands'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [input, setInput] = useState('')
  const [expandedProject, setExpandedProject] = useState(null)

  const handleCommand = (commandName) => {
    const match = commands.find((command) => commandName === command.name)
    if (match) {
      setCurrentView(match.output)
      setInput('')
    }
  }

  return (
    <>
      <h4 style={{ paddingBottom: '1rem' }}>
        Pixel Pulse Studios - Taylor Vorlop
      </h4>
      <AvailableCommands handleCommand={handleCommand} />
      <br />
      {currentView === 'home' && <Home />}
      {currentView === 'about' && <About />}
      {currentView === 'skills' && <Skills />}
      {currentView === 'contact' && <Contact />}
      {currentView === 'projects' && <Projects />}
      <br />
      <br />
      <label>
        <span>taylor</span>
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
              handleCommand(input)
            }
          }}
        />
      </label>
    </>
  )
}

export default App
