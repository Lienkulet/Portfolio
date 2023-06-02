import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className="bg-[#2D2E32] w-full py-5 text-white">
      <div className="container">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">Copyright © 2023. All rights are reserved</h1>
          <div className="flex flex-wrap gap-4">
            <Link href={'https://www.linkedin.com/in/alexandru-clocicov/'}
                target='_blank'
                className="hover:scale-y-110 ease-in-out duration-700">
              <AiFillLinkedin size={'2rem'} />
            </Link>
            <Link href={'https://github.com/Lienkulet'} 
                target='_blank'
                className="hover:scale-y-110 ease-in-out duration-700">
              <AiFillGithub size={'2rem'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
