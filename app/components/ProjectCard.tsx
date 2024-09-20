import React from 'react'
import Link from 'next/link'

interface ICard {
    title:string,
    techno:string[],
    code:string
}

interface IProjectContainerProps {
    card:ICard[]
}

const ProjectCard: React.FC<IProjectContainerProps> = ({card}) => {
  return (
    <ul className='text-center w-[85%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {card.map((element,index) => {
            return(
                <li className='grid items-start justify-start grid-rows-subgrid row-span-2 overflow-hidden gap-2 min-w-40 min-h-32 border-2 border-[#242424] w-full' key={index}>
                    <div className='text-left w-full h-full flex justify-end flex-col p-3.5 gap-0.5'>
                        <h3 className='text-lg font-semibold mb-2'>{element.title}</h3>
                        <div className='flex flex-wrap gap-2'>
                            {element.techno.map((tags,index) => {
                                return(
                                    <span className='inline-block bg-[#cdcdcd] text-[#050505] text-sm font-semibold px-3 py-2 rounded-full' key={index}>{tags}</span>
                                )
                            })}
                        </div>
                        <Link href={element.code} className='inline-flex gap-2 text-[#848484] mt-3.5'>View source code</Link>
                    </div>

                </li>
            )
        })}

    </ul>
  )
}

export default ProjectCard