import React from 'react'
import Skill from '../skill/Skill'

const Skills = ({skills}) => {
    return (
        <section id='skills' className='bg-[#F9F9F9] py-20'>
            <div className='container'>
                <header className='mb-10 md:text-start text-center'>
                    <h1 className='text-[#147efb] font-bold text-xl'>My Skills</h1>
                </header>
                <div className='flex md:flex-row flex-col items-center justify-between gap-2'>
                {
                  skills.length > 0 && skills.map((skill) => (
                    <Skill key={skill.id} skill={skill} />
                    ))
                  } 
                 </div>
              </div>
        </section>
    )
}

export default Skills

