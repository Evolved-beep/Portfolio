import React from 'react'
import projet from '@/data/projet.json'
import ProjectCard from '../components/ProjectCard'

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-12 text-[#CDCDCD]'>
      <h1 className='text-center mt-12 font-bold text-5xl'>Porfolio</h1>
      <h2 className='text-center mx-2.5 font-medium text-2xl'>A showcase of my work</h2>
      <div className='flex justify-center items-center'>
        <span className='underline mr-2'>Project created :</span>
        <span>{projet.length}</span>
      </div>
      <ProjectCard card={projet}/>
    </section>
  )
}

export default page