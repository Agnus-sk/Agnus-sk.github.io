import { useIntersection } from '../hooks/useIntersection'

const EXP = [
  {
    period: 'Apr – Aug\n2024',
    role: 'Python Developer Intern',
    company: 'Rogersoft Technologies Pvt Ltd',
    place: 'Kochi, Kerala',
    desc: 'Contributed to backend development and deployment workflows. Gained hands-on experience in API development while building foundational DevOps skills in containerization and CI/CD automation.',
    tags: [
      { label: 'Python',   cls: 'bp' },
      { label: 'Docker',   cls: 'bd' },
      { label: 'REST APIs',cls: '' },
      { label: 'Git',      cls: '' },
    ],
  },
  {
    period: '2025 –\nPresent',
    role: 'Open to Opportunities',
    company: 'Actively building projects',
    place: 'Remote / Bangalore',
    accentRole: true,
    desc: 'Building production-grade DevOps projects — Kubernetes clusters on AWS EKS, multi-environment CI/CD pipelines, and Infrastructure as Code with Terraform. Seeking full-time DevOps / Cloud Engineer roles.',
    tags: [
      { label: 'Kubernetes', cls: 'bk' },
      { label: 'AWS',        cls: 'ba' },
      { label: 'Docker',     cls: 'bd' },
      { label: 'Terraform',  cls: '' },
    ],
  },
]

export default function Experience() {
  const [ref, vis] = useIntersection()

  return (
    <section id="experience" ref={ref}>
      <div className="wrap">
        <div className={`sh reveal ${vis ? 'visible' : ''}`}>
          <span className="sh-eyebrow">Experience</span>
          <h2 className="sh-title">Work <em>history</em></h2>
        </div>

        <div className="exp-list">
          {EXP.map((e, i) => (
            <div key={e.role} className={`exp-row reveal ${vis ? 'visible' : ''} d${i + 2}`}>
              <div className="exp-body">
                <div className="exp-period">{e.period.replace('\n', ' ')}</div>
                <h3 className="exp-role" style={e.accentRole ? { background: 'var(--grad)', backgroundSize:'200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' } : {}}>
                  {e.role}
                </h3>
                <p className="exp-co">{e.company}</p>
                <p className="exp-place">{e.place}</p>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-tags">
                  {e.tags.map(t => <span key={t.label} className={`badge ${t.cls}`}>{t.label}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
