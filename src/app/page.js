import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import { client } from '../../sanity/lib/client'

export default async function Home() {
  
  const heroQuery = `*[_type == 'hero']{
    image
  }`

  const categoryQuery = `*[_type == 'category']{
    image, name, 
    technologies[] -> {
      name
    }
  }`

  const projectsQuery = `*[_type == 'project']{
    image, title, github, liveDemo, description,
    technologies[] -> {
      name
    }
  }`

  const hero = await client.fetch(heroQuery);
  const skills = await client.fetch(categoryQuery);
  const projects = await client.fetch(projectsQuery);
  
  return (
    <main className="min-h-screen md:pt-20 font-mulish">

        <Hero hero={hero} />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
    </main>
  )
}
