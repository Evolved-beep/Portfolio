"use client"
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return(
        <section className='mx-auto h-screen flex items-center justify-center px-12 py-7 lg:py-16'>
                <div className='text-center'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{`Hello I'm`}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Maxime",
                                1000,
                                "Front-end Developer",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                         />
                    </h1>
                    <p className='text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl'>Junior Front-end Developer</p>
                </div>
        </section>
    )


}

export default HeroSection