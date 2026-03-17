import { useIntersection } from '../hooks/useIntersection'

const CATS = [
  {
    icon: '🐍',
    title: 'Languages',
    sub: 'Core programming',
    tags: ['Python', 'Bash']
  },
  {
    icon: '☁️',
    title: 'AWS Cloud',
    sub: 'Cloud platform',
    tags: ['EC2', 'S3', 'VPC', 'IAM', 'CloudWatch', 'EKS', 'ECR']
  },
  {
    icon: '🐳',
    title: 'Containers',
    sub: 'Container & orchestration',
    tags: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm']
  },
  {
    icon: '⚙️',
    title: 'CI / CD',
    sub: 'Pipeline tools',
    tags: ['GitHub Actions', 'Jenkins', 'SonarQube', 'Maven']
  },
  {
    icon: '🏗️',
    title: 'Infrastructure as Code',
    sub: 'IaC tools',
    tags: ['Terraform', 'Ansible']
  },
  {
    icon: '📊',
    title: 'Monitoring',
    sub: 'Observability',
    tags: ['Prometheus', 'Grafana', 'CloudWatch']
  },
  {
    icon: '🔒',
    title: 'Security',
    sub: 'Access & secrets',
    tags: ['IAM', 'RBAC', 'GitHub Secrets']
  },
  {
    icon: '🧰',
    title: 'Version Control',
    sub: 'Code management',
    tags: ['Git', 'GitHub']
  },
  {
    icon: '💻',
    title: 'Operating System',
    sub: 'Environment',
    tags: ['Linux']
  }
];  // ✅ IMPORTANT FIX (semicolon + separation)

export default function Skills() {
  const [ref, vis] = useIntersection()

  return (
    <section id="skills" ref={ref}>
      <div className="wrap">
        <div className={`sh reveal ${vis ? 'visible' : ''}`}>
          <span className="sh-eyebrow">Skills</span>
          <h2 className="sh-title">Technical <em>toolkit</em></h2>
        </div>

        <div className="skill-grid">
          {CATS.map((c, i) => (
            <div key={c.title} className={`skill-card glass-card reveal ${vis ? 'visible' : ''} d${Math.min(i+1,6)}`}>
              <div className="sk-icon">{c.icon}</div>
              <div className="sk-title">{c.title}</div>
              <div className="sk-sub">{c.sub}</div>
              <div className="sk-tags">
                {c.tags.map(t => (
                  <span key={t} className="sk-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
