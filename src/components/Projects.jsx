import { useIntersection } from '../hooks/useIntersection'

const PROJECTS = [
  {
    icon: '🔄',
    date: 'Feb 2026',
    title: 'Multi-Environment Deployment Pipeline',
    tags: [
      { l: 'Jenkins', c: 'bd' },
      { l: 'Docker', c: 'bk' },
      { l: 'Kubernetes', c: '' },
      { l: 'SonarQube', c: '' }
    ],
    bullets: [
      "Designed and implemented a CI/CD pipeline using Jenkins to automate build, code quality analysis, containerization, and Kubernetes deployment.",
      "Integrated Maven builds and SonarQube Quality Gates to enforce code quality checks before deployment.",
      "Containerized the application using Docker and pushed versioned images to DockerHub.",
      "Implemented multi-environment Kubernetes deployment (DEV, TEST, PROD) with promotion workflows and RBAC-based access control."
    ],
  },

  {
    icon: '☸️',
    date: 'Jan 2026',
    title: 'Scalable Microservices Deployment on AWS EKS',
    tags: [
      { l: 'AWS', c: '' },
      { l: 'EKS', c: '' },
      { l: 'Terraform', c: '' },
      { l: 'Docker', c: '' },
      { l: 'GitHub Actions', c: '' }
    ],
    bullets: [
      "Provisioned AWS infrastructure including VPC, EKS cluster, and Load Balancer using Terraform.",
      "Containerized a Spring Boot microservice using Docker and automated builds using Maven.",
      "Built a CI/CD pipeline using GitHub Actions to build Docker images and push them to Amazon ECR.",
      "Deployed workloads to Amazon EKS using Kubernetes manifests (Deployment, Service, Ingress) with autoscaling and monitoring."
    ],
  },

  {
    icon: '🐳',
    date: 'Dec 2025',
    title: 'Full-Stack Application Deployment with Docker & CI/CD',
    tags: [
      { l: 'Docker', c: 'bd' },
      { l: 'Django', c: 'bdj' },
      { l: 'React', c: 'br' },
      { l: 'GitHub Actions', c: '' },
      { l: 'Terraform', c: '' }
    ],
    bullets: [
      "Containerized Django backend and React frontend using Docker with multi-stage builds.",
      "Used Docker Compose to orchestrate services and enable frontend-backend communication.",
      "Built a CI/CD pipeline using GitHub Actions to automate Docker image build and deployment.",
      "Provisioned a cloud VM using Terraform and deployed the application with secure configurations."
    ],
  },

  {
    icon: '🤖',
    date: 'Dec 2025',
    title: 'Euron AI — Mental Health Chatbot',
    tags: [
      { l: 'Python', c: 'bp' },
      { l: 'RAG', c: 'bg' },
      { l: 'FastAPI', c: 'bf' },
      { l: 'React', c: 'br' }
    ],
    bullets: [
      "Developed a responsive mental health assistant using FastAPI and React with JWT authentication and CORS middleware.",
      "Integrated Large Language Models via Groq API for context-aware responses.",
      "Designed a Supabase (PostgreSQL) database to store and manage user chat history."
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
