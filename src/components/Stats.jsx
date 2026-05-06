import { useReveal } from '../hooks/useReveal'
import { instructor } from '../data/site'

export default function Stats() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal stats-bar">
      <div className="stats-grid">
        {instructor.stats.map((s,i) => (
          <div key={i} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
