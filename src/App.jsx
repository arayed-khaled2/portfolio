import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Stage from './components/Stage'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Parcours from './components/Parcours'
import Contact from './components/Contact'

const DESCRIPTION = 'Khaled Arayed, étudiant en cybersécurité à Epitech Paris. Pentest web, CTF, sécurité des LLM. Recherche un stage de 4 à 6 mois dès avril 2027.'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Khaled Arayed | Étudiant en cybersécurité, EPITECH Paris</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content="Khaled Arayed" />
        <meta property="og:title" content="Khaled Arayed | Étudiant en cybersécurité, EPITECH Paris" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Stage />
        <Projects />
        <Tools />
        <Parcours />
        <Contact />
      </main>
    </>
  )
}
