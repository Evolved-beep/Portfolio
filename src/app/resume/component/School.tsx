import React, { Fragment } from "react";

interface IArray {
    name: string, 
    time: string,
    content: string[]
} 

const schoolArray: IArray[] = [{
    name: 'Front end Javascript - ReactJS, Openclasroom Paris',
    time: 'April 2022 - June 2023',
    content: ["Fetching database", "Building front-end app", "Responsive", "Basics ReactJs", "Basics Javascript"]
},{
    name:'Web developer and mobile developer, AFPA Amiens',
    time:'2020',
    content: ["HTML", "CSS", "Basics PHP", "Basics SQL", "Basics responsive"]
}]


const School = () => {
    return(
        <>
            {schoolArray.map((items :{name:string, time:string, content:string[]}, index) => {
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

export default School