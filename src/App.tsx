import { useWebHaptics } from 'web-haptics/react'
import { WebHaptics } from 'web-haptics'
import './App.css'

interface HapticButtonProps {
  name: string
  description: string
  colorClass: string
  onTap: () => void
}

function HapticButton({ name, description, colorClass, onTap }: HapticButtonProps) {
  return (
    <button className={`haptic-btn ${colorClass}`} onClick={onTap}>
      <span className="btn-name">{name}</span>
      <span className="btn-desc">{description}</span>
    </button>
  )
}

function App() {
  const { trigger } = useWebHaptics({ debug: true })

  return (
    <div className="app">
      <header className="header">
        <h1>Haptic Test</h1>
        <span className={`support-badge ${WebHaptics.isSupported ? 'supported' : 'unsupported'}`}>
          {WebHaptics.isSupported ? 'Vibration API supported' : 'Vibration API not supported'}
        </span>
      </header>

      <section className="section">
        <p className="section-label">Feedback presets</p>
        <div className="button-grid">
          <HapticButton
            name="Success"
            description="Two taps — positive confirmation"
            colorClass="success"
            onTap={() => trigger('success')}
          />
          <HapticButton
            name="Warning"
            description="Two taps — soft caution"
            colorClass="warning"
            onTap={() => trigger('warning')}
          />
          <HapticButton
            name="Error"
            description="Three sharp taps — failure"
            colorClass="error"
            onTap={() => trigger('error')}
          />
          <HapticButton
            name="Nudge"
            description="Strong tap then soft tap"
            colorClass="nudge"
            onTap={() => trigger('nudge')}
          />
          <HapticButton
            name="Buzz"
            description="Long 1 second vibration"
            colorClass="buzz"
            onTap={() => trigger('buzz')}
          />
        </div>
      </section>

      <section className="section">
        <p className="section-label">Impact weights</p>
        <div className="button-grid">
          <HapticButton
            name="Light"
            description="Very brief, subtle tap"
            colorClass="light"
            onTap={() => trigger('light')}
          />
          <HapticButton
            name="Medium"
            description="Standard tap"
            colorClass="medium"
            onTap={() => trigger('medium')}
          />
          <HapticButton
            name="Heavy"
            description="Strong, firm tap"
            colorClass="heavy"
            onTap={() => trigger('heavy')}
          />
          <HapticButton
            name="Soft"
            description="Gentle, rounded tap"
            colorClass="soft"
            onTap={() => trigger('soft')}
          />
          <HapticButton
            name="Rigid"
            description="Sharp, crisp tap"
            colorClass="rigid"
            onTap={() => trigger('rigid')}
          />
          <HapticButton
            name="Selection"
            description="Micro tap for selection"
            colorClass="selection"
            onTap={() => trigger('selection')}
          />
        </div>
      </section>

      <section className="section">
        <p className="section-label">Custom patterns</p>
        <div className="button-grid">
          <HapticButton
            name="Single Tap"
            description="One 50ms pulse"
            colorClass="single"
            onTap={() => trigger(50)}
          />
          <HapticButton
            name="Double Tap"
            description="Two quick taps with a gap"
            colorClass="double"
            onTap={() => trigger([80, 60, 80])}
          />
          <HapticButton
            name="Rhythm"
            description="Four-beat rhythmic pattern"
            colorClass="rhythm"
            onTap={() => trigger([100, 50, 100, 50, 100, 50, 100])}
          />
          <HapticButton
            name="Soft Buzz"
            description="Gentle 500ms vibration at 30%"
            colorClass="softbuzz"
            onTap={() => trigger({ pattern: [{ duration: 500, intensity: 0.3 }] })}
          />
        </div>
      </section>

      <p className="debug-note">
        Debug mode on — audio click plays on unsupported devices
      </p>
    </div>
  )
}

export default App
