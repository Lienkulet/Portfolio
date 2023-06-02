'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='bg-white py-6 px-12 flex items-center justify-between shadow-md
        w-full fixed top-0 z-20'>
        <Link href={'#hero'} className='font-bold text-xl text-[#2d2e32]'>
            Alex.dev
        </Link>
        <AiOutlineMenu className='md:hidden block' size={'1.5rem'} onClick={() => setShowMenu(prev => !prev)} />
        <div className='hidden md:flex flex-row gap-4 font-semibold text-md'>
            <Link href={'#hero'}
                className='hover:text-[#147efb] ease-in-out duration-500'
            >
                Home
            </Link>
            <Link href={'#about'}
                className='hover:text-[#147efb] ease-in-out duration-500'

            >
                About
            </Link>
            <Link href={'#skills'}
                className='hover:text-[#147efb] ease-in-out duration-500'

            >
                Skills
            </Link>
            <Link href={'#projects'}
                className='hover:text-[#147efb] ease-in-out duration-500'

            >
                Projects
            </Link>
            <Link href={'#contact'}
                className='hover:text-[#147efb] ease-in-out duration-500'

            >
                Contact
            </Link>
        </div>
        {showMenu && (
            <ul className='md:hidden flex flex-col list-none bg-white w-fit 
                    shadow-md p-6 absolute top-[4.6rem] right-0 border-t-2
                    gap-4 font-semibold text-md
                    '>
            <Link href={'#hero'}
                    onClick={() => setShowMenu(prev => !prev)}
                    className='hover:text-[#147efb] ease-in-out duration-500'>
                Home
            </Link>
                <Link href={'#about'}
                        onClick={() => setShowMenu(prev => !prev)}
                    className='hover:text-[#147efb] ease-in-out duration-500'>
                About
            </Link>
            <Link href={'#skills'}
                    onClick={() => setShowMenu(prev => !prev)}
                    className='hover:text-[#147efb] ease-in-out duration-500'                >
                Skills
            </Link>
            <Link href={'#projects'}
                    onClick={() => setShowMenu(prev => !prev)}
                    className='hover:text-[#147efb] ease-in-out duration-500'>
                Projects
            </Link>
            <Link href={'#contact'}
                    onClick={() => setShowMenu(prev => !prev)}
                    className='hover:text-[#147efb] ease-in-out duration-500'>
                Contact
            </Link>
        </ul>
        )}
    </nav>
  )
}

export default Navbar