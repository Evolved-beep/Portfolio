import Link from "next/link"
import Tags from "./component/Tags"
import { Globe, Github } from "lucide-react"

interface IArray {
    title:string, 
    description: string,
    tags:string[],
    github:string,
    vercel: string
}

const projectArray: IArray[] = [{
    title: "Kasa",
    description: "One of my school project that I made in React/JSX and I've rebuilded and redesigned it in Typescript and NextJS.",
    tags:["NextJS", "Typescript", "Front-end"],
    github:'https://github.com/Evolved-beep/Kasa',
    vercel:'https://kasa-weld-xi.vercel.app/'
},{
    title:'Pokepia', 
    description:"My pokedex project which you will find all the pokemons, all moves and all abilitys with a detail page for each of any ..",
    tags:["NextJS", "Typescript", "Front-end", "Recharts"],
    github:'https://github.com/Evolved-beep/Pokepia',
    vercel:"https://pokepia.vercel.app/"
},{
    title:"Unsplashed clone",
    description: "My first NextJS and Typescript project. A clone of Unsplashed which is based on an infinite image gallery search",
    tags:["NextJS", "Typescript", "Front-end"],
    github:"https://github.com/Evolved-beep/Unsplash-clone",
    vercel:"unsplash-clone-rho.vercel.app"
},{
    title:"Gradient Maker",
    description:"A desktop gradient maker project that I made just for improving my Javascript vanilla skills from an Udemy course",
    tags:["Javascript", "Desktop", "Front-end"],
    github:'https://github.com/Evolved-beep/gradient-maker',
    vercel:"gradient-maker-six.vercel.app"
}]


const project = () => {
    return(
        <section className="mx-6 mt-8 flex flex-col justify-center items-center text-[#ADB7BE] text-sm">
            <h1 className="text-base text-white font-extrabold">Project</h1>
            {projectArray.map((element:{title:string, description:string,tags:string[], github:string, vercel:string}, index) => {
                return(
                    <div className="pt-4 px-4 my-4 border border-[white] md:w-7/12 rounded-xl " key={index}>
                        <div className="text-center">
                            <h1 className=" text-base font-extrabold mb-2 text-white">{element.title}</h1>
                            <p>{element.description}</p>
                        </div>
                        <div className="my-4 flex flex-col justify-center items-center">
                            <Tags tags={element.tags}/>
                            <div className="flex justify-center items-center my-4">
                                <Link href={element.vercel} className="mr-8">
                                    <Globe color="white" />
                                </Link>
                                <Link href={element.github}>
                                    <Github color="white"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )

}

export default project