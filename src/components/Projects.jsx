import { useIntersection } from '../hooks/useIntersection'

const PROJECTS = [
  {
    icon: '🔄', date: 'Feb 2026',
    title: 'Multi-Environment Deployment Pipeline',
    tags: [{ l:'Docker', c:'bd' }, { l:'Kubernetes', c:'bk' }, { l:'GitHub Actions', c:'' }, { l:'Jenkins', c:'' }],
    bullets: [
      'Fully automated CI/CD pipeline with GitHub Actions & Jenkins supporting multiple environments with promotion logic',
      'Branching strategy with env-specific config using Docker, Maven, and SonarQube verification gates',
      'IAM, Kubernetes RBAC, and GitHub Secrets integrated to secure deployments per stage',
    ],
  },
  {
    icon: '☸️', date: 'Jan 2026',
    title: 'Containerized Java App on AWS EKS',
    tags: [{ l:'Spring Boot', c:'bs' }, { l:'AWS', c:'ba' }, { l:'EKS', c:'be' }, { l:'Docker', c:'bd' }],
    bullets: [
      'Containerised Java Spring Boot app with Docker; automated testing with Maven',
      'GitHub Actions CI/CD with SonarQube static analysis and versioned image tagging',
      'Deployed to Amazon EKS via Kubernetes manifests — Deployment, Service, Ingress',
    ],
  },
  {
    icon: '🐳', date: 'Dec 2025',
    title: 'Full Stack App Deployment with Docker',
    tags: [{ l:'Docker', c:'bd' }, { l:'Django', c:'bdj' }, { l:'React', c:'br' }, { l:'GitHub Actions', c:'' }],
    bullets: [
      'Containerised full-stack Django + React app using Docker Compose for environment parity',
      'CI/CD with GitHub Actions, SonarQube analysis, and versioned image tagging',
      'Deployed to Amazon EKS with Kubernetes manifests for scalable access',
    ],
  },
  {
    icon: '🤖', date: 'Dec 2025',
    title: 'Euron AI — Mental Health Chatbot',
    tags: [{ l:'Python', c:'bp' }, { l:'RAG', c:'bg' }, { l:'FastAPI', c:'bf' }, { l:'React', c:'br' }],
    bullets: [
      'Responsive mental health assistant using FastAPI + React with JWT auth and CORS middleware',
      'LLMs via Groq API for context-aware support; Supabase (PostgreSQL) for persistent chat history',
    ],
  },
]

export default function Projects() {
  const [ref, vis] = useIntersection()

  return (
    <section className="section-alt" id="projects" ref={ref}>
      <div className="wrap">
        <div className={`sh reveal ${vis ? 'visible' : ''}`}>
          <span className="sh-eyebrow">Projects</span>
          <h2 className="sh-title">Selected <em>work</em></h2>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`proj-card glass-card reveal-s ${vis ? 'visible' : ''} d${Math.min(i+1,6)}`}>
              <div className="proj-head">
                <div className="proj-icon">{p.icon}</div>
                <span className="proj-date">{p.date}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <ul className="proj-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t.l} className={`badge ${t.c}`}>{t.l}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
