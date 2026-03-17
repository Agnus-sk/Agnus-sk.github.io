import { useIntersection } from '../hooks/useIntersection'

export default function About() {
  const [ref, vis] = useIntersection()

  return (
    <section className="section-alt" id="about" ref={ref}>
      <div className="wrap">
        <div className={`sh reveal ${vis ? 'visible' : ''}`}>
          <span className="sh-eyebrow">About</span>
          <h2 className="sh-title">Passionate about<br /><em>cloud &amp; automation</em></h2>
        </div>

        <div className="about-grid">
          {/* Terminal + links */}
          <div className={`reveal-l ${vis ? 'visible' : ''} d2`}>
            <div className="term-win">
              <div className="term-bar">
                <span className="tw tw-r" /><span className="tw tw-y" /><span className="tw tw-g" />
                <span className="term-title">agnus@devops — profile.json</span>
              </div>
              <div className="term-body">
                <div style={{ display:'flex', gap:10 }}><span className="tp">~</span><span className="tc">cat profile.json</span></div>
                <div style={{ marginTop:6, color:'#555' }}>{'{'}</div>
                <div className="to"><span className="tk">"name"</span>: <span className="tv">"Agnus SK"</span>,</div>
                <div className="to"><span className="tk">"role"</span>: <span className="tv">"Cloud & DevOps Engineer"</span>,</div>
                <div className="to"><span className="tk">"location"</span>: <span className="tv">"Bangalore 🇮🇳"</span>,</div>
                <div className="to"><span className="tk">"education"</span>: <span className="tv">"MCA"</span>,</div>
                <div className="to"><span className="tk">"stack"</span>: [<span className="tv">"Docker"</span>, <span className="tv">"K8s"</span>, <span className="tv">"AWS"</span> <span className="tv">"Terraform" </span>],</div>
                <div className="to"><span className="tk">"status"</span>: <span className="ts">"open to work" ✓</span></div>
                <div style={{ color:'#555' }}>{'}'}</div>
                <div style={{ display:'flex', gap:10, marginTop:8 }}>
                  <span className="tp">~</span><span className="cursor" />
                </div>
              </div>
            </div>

            <div className="about-links">
              {[
                { icon:'📞', label:'9495540012',           href:'tel:9495540012' },
                { icon:'✉️', label:'skagnussk@gmail.com',  href:'mailto:skagnussk@gmail.com' },
                { icon:'💼', label:'linkedin / agnus-sk',  href:'https://linkedin.com/in/agnus-sk' },
                { icon:'🐙', label:'github / agnus-sk',    href:'https://github.com/agnus-sk' },
              ].map(c => (
                <a key={c.href} className="about-link" href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="al-icon">{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className={`about-text reveal-r ${vis ? 'visible' : ''} d3`}>
            <h2>
		  I'm Agnus —<br />
		  <em>DevOps & Cloud Engineer</em>
		</h2>

		<p>
		  Based in <strong>Bangalore</strong>, I'm a DevOps Engineer focused on deploying,
		  automating, and managing scalable applications in cloud environments.
		</p>

		<p>
		  With a <strong>Master's degree in Computer Applications</strong>, I bring a strong
		  analytical foundation to infrastructure engineering — working across
		  <strong> cloud infrastructure</strong>, <strong> containerization</strong>, and
		  <strong> CI/CD pipelines</strong>.
		</p>

		<p>
		  I have hands-on experience with <strong>Docker</strong>, <strong>Kubernetes</strong>,
		  and <strong>AWS</strong> — focusing on building efficient, secure, and scalable systems.
		</p>

            <div className="about-chips">
              {[
                { icon:'🐳', lbl:'Containers', val:'Docker / K8s' },
                { icon:'☁️', lbl:'Cloud',      val:'AWS' },
                { icon:'⚡', lbl:'Pipelines',  val:'GitHub Actions' },
              ].map(c => (
                <div className="chip" key={c.lbl}>
                  <div className="chip-icon">{c.icon}</div>
                  <div className="chip-lbl">{c.lbl}</div>
                  <div className="chip-val">{c.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
