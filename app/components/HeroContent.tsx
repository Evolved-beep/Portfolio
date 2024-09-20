import React from 'react'
import profilePicture from "@/assets/images/chibidev.png"
import Image from 'next/image'

const HeroContent = () => {
  return (
    <section className='flex justify-center items-center m-auto pt-8'>
        <Image src={profilePicture} height="350" alt='Representation of a dev' />
    </section>
  )
}

export default HeroContent