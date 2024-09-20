import React from 'react'

interface IQualification {
    qualification:[],
    title:string,
    years:string,
    language:[],
    location:string
}

const QualificationContent = ({qualification}:IQualification) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <ul className='w-full'>
            {qualification.map((content:IQualification,index) => {
                return(
                        <li className="flex flex-col justify-center items-start my-8 gap-2 font-semibold" key={index}>
                            <h4 className='text-[#cdcdcd]'>{content.title}</h4>
                            <span className='text-sm text-[#848484]'>{content.years}</span>
                            <span className='text-sm text-[#848484]'>{content.location}</span>
                            {content.language.map((lang:string,index) => {
                                return(
                                        <span className='text-sm text-[#848484] font-light' key={index}>{lang}</span>
                                )
                            })}
                        </li>
                )

            })}
        </ul>
    </div>

  )
}

export default QualificationContent