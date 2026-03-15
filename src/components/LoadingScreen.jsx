import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [hiding, setHiding] = useState(false)
  const [done,   setDone]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1800)
    const t2 = setTimeout(() => setDone(true),   2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (done) return null

  return (
    <div className={`loader${hiding ? ' loader-hide' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">
          <span className="loader-word">agnus</span>
          <span className="loader-dot-logo" />
          <span className="loader-word2">sk</span>
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
