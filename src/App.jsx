import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Khaled Arayed | Développeur Web</title>
        <meta name="description" content="Portfolio de Khaled Arayed, étudiant à Epitech Paris passionné par le développement fullstack, la data science et la cybersécurité." />
        <meta name="author" content="Khaled Arayed" />
        <meta property="og:title" content="Khaled Arayed | Développeur Web" />
        <meta property="og:description" content="Portfolio de Khaled Arayed, étudiant à Epitech Paris passionné par le développement fullstack, la data science et la cybersécurité." />
        <meta property="og:type" content="website" />
        <style>{`
          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { background: #ffffff; }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #f5f5f5; }
          ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #FF6B00; }
        `}</style>
      </Helmet>
      <div style={{ background: '#ffffff', minHeight: '100vh', color: '#111827', fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
