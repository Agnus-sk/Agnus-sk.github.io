import { useIntersection } from '../hooks/useIntersection'

const EDU = [
  {
    emoji: '🎓', badge: 'Post Graduate',
    degree: 'Master of Computer Applications',
    school: 'St Aloysius College',
    period: '2022 – 2024', location: 'Mangalore, Karnataka',
  },
  {
    emoji: '🔬', badge: 'Graduate',
    degree: 'Bachelor of Physics',
    school: 'ITM College of Art and Science',
    period: '2018 – 2021', location: 'Kannur, Kerala',
  },
]

export default function Education() {
  const [ref, vis] = useIntersection()

  return (
    <section className="section-alt" id="education" ref={ref}>
      <div className="wrap">
        <div className={`sh reveal ${vis ? 'visible' : ''}`}>
          <span className="sh-eyebrow">Education</span>
          <h2 className="sh-title">Academic <em>background</em></h2>
        </div>

        <div className="edu-grid">
          {EDU.map((e, i) => (
            <div key={e.degree} className={`edu-card glass-card reveal-s ${vis ? 'visible' : ''} d${i+2}`}>
              <div className="edu-emoji">{e.emoji}</div>
              <span className="edu-badge-lbl">{e.badge}</span>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
              <div className="edu-meta">
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {e.period}
                </span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {e.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal ${vis ? 'visible' : ''} d4`}
          style={{ marginTop:32, maxWidth:860, display:'flex', alignItems:'center', gap:16,
                   padding:'20px 24px', background:'var(--glass)', border:'1px solid var(--gb)',
                   borderRadius:'var(--r-sm)', backdropFilter:'blur(16px)' }}>
          <span style={{ fontSize:'1.4rem' }}>📜</span>
          <div>
            <div style={{ fontSize:'.875rem', fontWeight:600, color:'var(--t1)', marginBottom:3 }}>
              Continuously learning
            </div>
            <div style={{ fontSize:'.8rem', color:'var(--t3)' }}>
              Pursuing AWS certifications and advanced DevOps skills
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
