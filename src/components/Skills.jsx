import { useIntersection } from '../hooks/useIntersection'

const CATS = [
  { icon:'🐍', title:'Languages',        sub:'Core programming',    tags:['Python','JavaScript','HTML / CSS','Bash / Shell'] },
  { icon:'☁️', title:'AWS Cloud',        sub:'Cloud platform',      tags:['EC2','S3','VPC','IAM','CloudWatch','EKS','ECR'] },
  { icon:'🐳', title:'Containers',       sub:'Container tech',      tags:['Docker','Docker Compose','Kubernetes','Helm','EKS'] },
  { icon:'⚙️', title:'CI / CD',          sub:'Pipeline tools',      tags:['GitHub Actions','Jenkins','SonarQube','Maven'] },
  { icon:'🏗️', title:'IaC',             sub:'Infrastructure code', tags:['Terraform','Ansible','CloudFormation'] },
  { icon:'🔒', title:'Security',         sub:'DevSecOps',           tags:['IAM Policies','RBAC','GitHub Secrets','JWT / CORS'] },
  { icon:'🛠️', title:'Tools',           sub:'Developer tools',     tags:['Git','GitHub','Linux','Nginx','VS Code'] },
  { icon:'📡', title:'Networking',       sub:'Infrastructure',      tags:['TCP / IP','DNS','Load Balancing','VPC / Subnets'] },
  { icon:'🔄', title:'DevOps Practices', sub:'Methodologies',       tags:['CI / CD','SDLC','Auto Scaling','Monitoring','GitOps'] },
]

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
                {c.tags.map(t => <span key={t} className="sk-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
