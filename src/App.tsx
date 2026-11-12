import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollProgress from './components/common/ScrollProgress'
import BackToTop from './components/common/BackToTop'
import CustomCursor from './components/common/CustomCursor'
import EasterEgg from './components/common/EasterEgg'
import ErrorBoundary from './components/common/ErrorBoundary'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import SystemArchitecture from './components/architecture/SystemArchitecture'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <SystemArchitecture />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <EasterEgg />
    </ErrorBoundary>
  )
}
