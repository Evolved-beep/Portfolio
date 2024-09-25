import React from 'react'
import Link from 'next/link'

const HeroDescription = () => {
  return (
    <section className='px-5 flex flex-col justify-center items-center text-center mt-12 text-[#CDCDCD] gap-5 md:border-2 md:border-[#242424] md:p-5 md:w-8/12'>
        <h1 className='text-5xl leading-snug text-center'>Hi, I'm Maxime Magnier</h1>
        <h2 className='text-2xl my-6 mx-12 leading-snug relative italic'>Front-end Developer</h2>
        <p className='my-12 text-base italic leading-snug text-[#848484] md:my-6'>
        Hello, I'm Maxime I'm passionate by the world of internet since I'm a kid I always knew.
        I wanted to work in this world but life never goes how we wanted.
        I've learned the web developement by my own first, then I've followed two educations for getting degrees.
        Since I'm trying to improve my skills and trying to increase it for being a better developer.
        I always want to learn more and more things because the world of the developement is really wide.</p>
        <Link href="/contact">
            <button 
            className='flex justify-center items-center bg-[#CDCDCD] py-5 px-6 text-[#000000] rounded-lg w-60'>Contact me</button>
        </Link>
    </section>
  )
}

export default HeroDescription