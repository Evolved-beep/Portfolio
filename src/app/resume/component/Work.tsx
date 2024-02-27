import React from "react";

interface IWork {
    name: string, 
    time: string, 
    content: string[]
}

const workArray: IWork[] = [{
    name:'Internship at INSY2S',
    time:"August 2020 - November 2020",
    content:["Learning ReactJS", "Learning React Native", "Starting an app for Bookseller", "Work with agile method"]

}]

const Work = () => {
    return(
        <>
            {workArray.map((items:{name:string,time:string,content:string[]}, index) => {
                return(
                    <div className="mb-14 m-4 text-left text-sm font-semibold" key={index}>
                        <h1 className="mt-4 md:text-lg">{items.name}</h1>
                        <div className="text-[#BBBBBB] md:text-base">
                            <h4 className="mx-2 my-4">{items.time}</h4>
                            <ul className="list-disc pl-8 font-light">
                                {items.content.map((el:string, index) => {
                                    return(
                                        <li className="text-sm" key={index}>{el}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
            
        </>
    )


}

export default Work