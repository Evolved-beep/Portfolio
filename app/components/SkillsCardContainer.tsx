import React from 'react'
import SkillsCard from './SkillsCard'

interface ISkill {
        language:string,
        level:string,
    }
    
interface ISkillContainerProps {
    skills:ISkill[]
    title:string
}

const SkillsCardContainer: React.FC<ISkillContainerProps> = ({skills,title}) => {
  return (
    <div className='flex justify-center items-center flex-col w-full md:w-[415px] md:h-full'>
        <div className='w-[80%] flex flex-col items-start justify-start m-auto min-h-[415px] p-5 border-2 border-[#242424] rounded-lg md:min-h-[450px] '>
            <h3 className='flex justify-center items-center font-bold text-2xl mx-auto'>{title}</h3>
            <ul className='flex flex-col items-center justify-center mr-auto ml-[30px] mt-6 w-6/12 gap-[50px] md:grid md:grid-cols-2 md:grid-rows-3 md:m-0 md:mt-[25px] md:w-full'>
                {skills.map((content, index) => {
                    console.log(content)
                    return(
                        <SkillsCard language={content.language} level={content.level} key={index}/>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default SkillsCardContainer