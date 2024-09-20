import React from 'react'
import Link from 'next/link'

interface IAbout {
    svg:string,
    title:string,
    status:string
}

const AboutCard = ({svg,title,status}:IAbout) => {
  return (
            <div className='flex justify-center items-center flex-wrap mb-6 md:w-full'>
                        <div 
                        className='flex justify-center items-center flex-col border-2 border-[#242424] rounded-md text-lg font-bold w-full min-h-32 gap-2.5 md:p-5'>
                            <img src={svg} alt="title representation by an icon" />
                            <h3 className='flex justify-center items-center md:text-center md:gap-2'>{title}</h3>
                            <p className='text-sm text-[#848484] text-center'>{status}</p>
                        </div>
            </div>
  )
}

export default AboutCard