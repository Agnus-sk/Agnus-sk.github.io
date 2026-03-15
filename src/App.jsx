import { ThemeProvider } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

function BgOrbs() {
  return (
    <div className="bg-orbs" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <BgOrbs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
