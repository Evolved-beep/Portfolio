import React from 'react'
import { BadgeCheck } from 'lucide-react'

interface ISkills {
    language:string,
    level:string
}

const SkillsCard = ({language,level}:ISkills) => {
  return (
    <>
            <li className='text-start w-full'>
                <div className='relative ml-[30px]'>
                   <BadgeCheck className='absolute left-[-28px] font-bold'/>
                        <div className='flex flex-col'>
                            <h4 className='font-bold'>{language}</h4>
                            <p className='text-[#848484]'>{level}</p>
                                    </div>
                                </div>
                            </li>
    </>
                        
  )
}

export default SkillsCard