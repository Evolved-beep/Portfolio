import React from "react";

interface ISkills {
    type: string,
    techno: string[]
}

const skillsArray: ISkills[] = [{
    type:'Frontend',
    techno:["ReactJS", "NextJS", "Typescript", "Tailwind CSS", "Figma", "SCSS"]
}, {
    type:"Library",
    techno:["Redux", "Axios", "Fetch", "NpmJS"]
}, {
    type:"Backend",
    techno:["NodeJS", "Express", "MYSQL", "MongoDB"]
}]

const Skills = () => {
    return(
        <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start">
            {skillsArray.map((skills, index) => {
                return(
                    <div className="mb-8 xl:m-4 " key={index}>
                        <h1 className="py-2 px-8 border-x-[1px] border-x-purple-500 font-semibold mb-4 w-40">{skills.type}</h1>
                            {skills.techno.map((el:string, index) => {
                                return(
                                <ul key={index}>
                                    <li className="py-2 px-8 text-[#BBBBBB] text-sm">{el}</li>
                        </ul>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )

    

}

export default Skills