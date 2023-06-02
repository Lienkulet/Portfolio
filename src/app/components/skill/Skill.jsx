// import { urlForImage } from '../../../../sanity/lib/image'
// import Image from 'next/image'
import React from 'react'

const Skill = ({skill: {name, image, technologies}}) => {
  const wi = name === 'Styling'? 100 : 150;
  return (
    <article className='flex flex-col items-center bg-white w-full md:w-[230px] h-[280px] rounded-lg shadow  p-2'>
      <header className='flex flex-col items-center border-b w-full p-2 gap-2'>
        {/* <Image 
          src={urlForImage(image).url()}
          width={wi}
          height={150}
          className='border border-[#147efb] rounded-full bg-[#7e8995]'
        /> */}
        <h1 className='font-semibold text-lg '>{name}</h1>
        </header>
        <main className='flex flex-col items-center py-3  gap-2 '>
        {technologies?.length > 0 && technologies?.map((technology) => (
          <h1 key={technology.id} className='text-[#555] text-md font-normal'>{technology.name}</h1>
          ))}
        </main>
    </article>
  )
}

export default Skill