import React from 'react'
import Project from '../project/Project'

const Projects = ({projects}) => {
  return (
    <section id='projects' className='bg-white py-20'>
      <div className='container'>
        <header className='flex flex-col mb-10 gap-2 md:text-start text-center'>
          <h1 className='text-[#147efb] font-bold text-xl'>Projects</h1>
          <h1 className='font-bold text-xl'>Each project is a unique 🧩 of development</h1>
        </header>
        <main className='flex flex-col items-center gap-6'>
          {
            projects.length > 0 && projects.map((project, index) => (
              <Project key={index} project={project} nr={index} />
            ))
          }
        </main>
      </div>
    </section>
  )
}

export default Projects