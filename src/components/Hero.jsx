import { useEffect, useState } from 'react'

const ROLES = ['DevOps Engineer','AWS Cloud Enthusiast','CI/CD Pipeline Builder','Kubernetes Practitioner','Docker Specialist']

function useTyping(words, spd = 72, pause = 1800) {
  const [text, set]   = useState('')
  const [wi, setWi]   = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[wi % words.length]
    const t = setTimeout(() => {
      if (!del) {
        set(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause)
      } else {
        set(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setWi(i => i + 1) }
      }
    }, del ? spd / 2 : spd)
    return () => clearTimeout(t)
  }, [text, del, wi, words, spd, pause])

  return text
}

export default function Hero() {
  const typed = useTyping(ROLES)

  return (
    <section className="hero" id="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="wrap">
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot" />
            Fresher DevOps Engineer · Open to work
          </div>

          <h1 className="hero-name">
            <span className="grad-name">Agnus SK</span>
          </h1>

          <p className="hero-sub">
            <strong>DevOps Engineer</strong> &amp; AWS Cloud Enthusiast
          </p>

          <p className="hero-loc">
            Bangalore, India
          </p>

          <div className="hero-terminal">
            <span className="t-prompt">~</span>
            <span className="t-arrow">$</span>
            <span className="t-text">{typed}</span>
            <span className="cursor" />
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-fill"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:skagnussk@gmail.com" className="btn btn-outline">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
