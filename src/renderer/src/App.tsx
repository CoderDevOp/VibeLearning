
import { useState } from 'react'

function App(): React.JSX.Element {
  const [started, setStarted] = useState(false)
  const [sessionActive, setSessionActive] = useState(false)
  const [app, setApp] = useState('VS Code')
  const [goal, setGoal] = useState('')

  if (sessionActive) {
    return (
      <main className="app workspace-app">
        <header className="workspace-header">
          <div>
            <p className="brand">VIBE LEARNING</p>
            <span className="session-label">YOUR LEARNING WORKSPACE</span>
          </div>
          <button
            className="end-button"
            onClick={() => setSessionActive(false)}
          >
            End Session
          </button>
        </header>

        <div className="workspace-content">
          <section className="workspace-left">
            <span className="status">
              <span className="status-dot" />
              SESSION READY
            </span>

            <h1>Let's learn something.</h1>

            <p className="subtitle">
              Vibe is ready to guide you through your task.
            </p>

            <div className="info-card">
              <span className="card-label">APPLICATION</span>
              <h2>{app}</h2>

              <div className="card-divider" />

              <span className="card-label">YOUR LEARNING GOAL</span>
              <p>{goal}</p>
            </div>

            <button className="start-button connect-button">
              Connect to Workspace →
            </button>

            <p className="helper-text">
              Workspace connection will be implemented next.
            </p>
          </section>

          <aside className="mentor-panel">
            <div className="mentor-icon">✦</div>
            <h2>Your AI Mentor</h2>
            <p>
              Your personalized learning guidance will appear here.
            </p>

            <div className="mentor-message">
              <span>VIBE</span>
              <p>
                Hi! I'll help you understand each step instead of
                simply doing the work for you.
              </p>
            </div>
          </aside>
        </div>
      </main>
    )
  }

  if (started) {
    return (
      <main className="app">
        <section className="setup">
          <p className="brand">VIBE LEARNING</p>
          <h1>Let's get started.</h1>
          <p className="subtitle">
            Tell Vibe what you're working on.
          </p>

          <label>Choose your application</label>
          <select value={app} onChange={(e) => setApp(e.target.value)}>
            <option>VS Code</option>
            <option>Google Chrome</option>
            <option>Microsoft Excel</option>
            <option>Other</option>
          </select>

          <label>What do you want to learn?</label>
          <textarea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Example: Help me build a React website..."
          />

          <button
            className="start-button"
            disabled={!goal.trim()}
            onClick={() => setSessionActive(true)}
          >
            Start Session →
          </button>

          <button className="back-button" onClick={() => setStarted(false)}>
            ← Back
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="app">
      <section className="welcome">
        <p className="brand">VIBE LEARNING</p>
        <h1>Learn by doing.</h1>
        <p className="subtitle">
          Your personal AI mentor, ready to guide you through any task.
        </p>
        <button className="start-button" onClick={() => setStarted(true)}>
          Start Learning
        </button>
      </section>
    </main>
  )
}

export default App
