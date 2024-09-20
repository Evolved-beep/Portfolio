import React from 'react'
import frontend from "@/data/frontend.json"
import backend from '@/data/backend.json'
import SkillsCardContainer from '../components/SkillsCardContainer';
import Qualification from '../components/Qualification';

const Skills = () => {
  return (
    <section className='flex justify-center items-center flex-col gap-6 text-[#cdcdcd] md:gap-12'>
        <h1 className='mt-12 text-5xl font-bold'>Skills</h1>
        <h2 className='text-2xl font-medium'>My technical levels</h2>
        <div className='flex flex-col justify-center items-center md:h-full lg:flex-row gap-4 w-full'>
          <SkillsCardContainer skills={frontend} title='Frontend skills' />
          <SkillsCardContainer skills={backend} title='Backend skills' />
        </div>
        <h2 className='text-2xl font-medium'>Qualifications</h2>
        <Qualification />
        
    </section>
  )
}
export default Skills