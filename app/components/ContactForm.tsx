"use client"
import React,{useState} from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const [isNameActive, setIsNameActive] = useState(false)
    const [isEmailActive,setIsEmailActive] = useState(false)
    const [isMessageActive, setIsMessageActive] = useState(false)
    const [error,setError] = useState(false)

    const handleFocus = (field: string) => {
      if (field === 'name') setIsNameActive(true);
      if (field === 'email') setIsEmailActive(true);
      if (field === 'message') setIsMessageActive(true);
    };
  
    const handleBlur = (field: string) => {
      if (field === 'name' && formData.name === '') setIsNameActive(false);
      if (field === 'email' && formData.email === '') setIsEmailActive(false);
      if (field === 'message' && formData.message === '') setIsMessageActive(false);
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const serviceID = "service_zotzz2p"
        const templateID = "template_6ru5xmw"
        const publicKey = "9ZIG0j12DnCMDaffj"

        emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre message a été envoyé avec succès !');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Une erreur est survenue, veuillez réessayer.');
      });

      setFormData({
        name:"",
        email:"",
        message:""
      })
      
    }
  return (
    <form className='w-full bg-transparent border-none mt-12 lg:w-5/12' onSubmit={handleSubmit}>
        <div className='relative mb-4'>
            <label htmlFor="name" 
            className={`absolute  transition-custom inline-block px-2.5 rounded-full text-[#848484] focus-within:bg-none ${isNameActive ? "text-current scale-[90%] top-[-12px] left-[13px] active" : "top-[34%] left-[23px] scale-[115%]"}`}>
            Name
            </label>
            <input 
            type="text"
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            required
            className='border-2 border-[#242424] py-2.5 px-3.5 w-full h-[75px] radius bg-input focus:outline-none' />
        </div>
        <div className='relative mb-4'>
            <label htmlFor="email" 
            className={`absolute  transition-custom inline-block px-2.5 rounded-full text-[#848484] focus-within:bg-none ${isEmailActive ? "text-current scale-[90%] top-[-12px] left-[13px] active" : "top-[34%] left-[23px] scale-[115%]"}`}>
            Email
            </label>
            <input 
            type="text"
            id='email'
            name='email'
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title='Enter a valid email'
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur("email")}
            required
            className='border-2 border-[#242424] py-2.5 px-3.5 w-full h-[75px] radius bg-input focus:outline-none' />
        </div>
        <div className='relative mb-4'>
            <label htmlFor="message" 
            className={`absolute transition-custom inline-block px-2.5 rounded-full text-[#848484] focus-within:bg-none ${isMessageActive ? "text-current scale-[90%] top-[-12px] left-[13px] active" : "top-[34%] left-[23px] scale-[115%]"}`}>
            Message
            </label>
            <textarea
            id='message'
            name='message'
            rows={8}
            cols={50}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur('message')}
            required
            className='border-2 border-[#242424] py-2.5 px-3.5 w-full radius bg-input focus:outline-none' />
        </div>
        <button 
        className='flex justify-center items-center text-center w-full mt-6 rounded-2xl py-2.5 px-3.5 bg-[#cdcdcd] text-[#000] text-lg font-medium'
        type='submit'>Message me</button>
    </form>
  )
}

export default ContactForm