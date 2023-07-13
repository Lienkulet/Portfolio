import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-white py-20'>
        <div className="container">
            <div className='flex md:flex-row flex-col-reverse gap-14 md:items-start items-center text-center'>
            <Image 
                src='/me2.jpg'
                alt='me2'
                height={150}
                width={310}
                className='rounded-xl w-[410px] h-[350px] bg-cover'
                />
                <div className='flex flex-col gap-3 max-w-lg'>
                    <h5 className='font-bold text-md text-[#147efb]'>ABOUT ME</h5>
                    <h1 className='font-extrabold text-lg text-[#2d2e32]'>A dedicated Frontend Developer</h1>
                    <p className='text-[#555] text-md'>
                    I am Alex, a dedicated fitness enthusiast and proficient frontend developer. With a workout journey 
                    spanning over two years, I have cultivated a meticulous attention to detail. In my free time, 
                    I enjoy listening to music, a lifelong passion that aids in my concentration and serves 
                    as a constant source of motivation in my professional pursuits.
                    </p>
                    <p className='text-[#555] text-md'>
                     I initially started coding as a hobby, but soon I discovered an undeniable passion that urged me to transform it into a career. 
                     I am a quick learner and comfortable working with both frontend and backend technologies with popular frameworks like React, Angular,
                     and NextJs and I have a strong foundation in database management with systems like MongoDB and MySQL
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About