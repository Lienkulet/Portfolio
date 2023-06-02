import React from 'react'
import { urlForImage } from '../../../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const Project = ({
    project: {
         image, title, github, liveDemo, description, technologies 
        }, nr
    }) => {
  return (
    <article className='shadow w-full p-4 rounded-xl border '>
        <figure className={`flex flex-col md:flex-row ${nr%2 === 0 ? '' : 'md:flex-row-reverse'} gap-6 justify-between`}>
            <Image
                src={urlForImage(image).url()}
                alt={title}
                height={310}
                width={310}
                className='rounded-xl w-[460px] h-[350px] shadow-md border bg-contain'
            />
            <figcaption className='flex flex-col items-center max-w-md mx-auto'>
                <header className='mt-4'> 
                    <h1 className='font-bold text-xl text-[#2d2e32]'>{title}</h1>
                </header>
                <main className='flex flex-col items-center gap-2 my-auto '>
                    <p className='text-center '>{description}</p>
                    <div className='flex flex-wrap gap-2 items-center justify-center mt-2'>
                        {technologies.length > 0 && technologies.map((technology) => (
                            <h1 key={technology.id} className='p-2 bg-white shadow font-semibold text-md'>{technology.name}</h1>
                        ))}
                    </div>
                </main>
                <footer className='flex flex-row items-baseline relative bottom-0 mt-4 md:mt-auto mb-2 gap-10 font-medium'>
                    <Link href={github} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb] 
                            ease-in-out duration-500">
                            Code
                            <AiFillGithub size={'1.5rem'}/>
                    </Link>
                    <Link href={liveDemo} target='_blank'
                         className="flex flex-row items-center gap-2 hover:scale-y-110 hover:text-[#147efb]
                            ease-in-out duration-500">
                            LiveDemo
                            <AiOutlineLink size={'1.5rem'}/>
                    </Link>
                </footer>
            </figcaption>
        </figure>
    </article>
  )
}

export default Project