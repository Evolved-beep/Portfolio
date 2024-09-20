import React from 'react'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <section className='h-full flex flex-col justify-center items-center text-[#cdcdcd] gap-6 w-[90%] m-auto'>
        <h1 className='mt-12 text-5xl font-bold'>Contact Me</h1>
        <h2 className='mx-2.5 text-2xl font-semibold'>Get in touch</h2>
        <ContactForm />
    </section>
  )
}

export default page