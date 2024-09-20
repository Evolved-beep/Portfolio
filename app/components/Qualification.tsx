"use client"
import React,{useState, useTransition} from 'react'
import TabButton from './TabButton'
import QualificationContent from './QualificationContent'
import education from '@/data/education.json'
import experience from "@/data/experience.json"

const Qualification = () => {
    const [tab,setTab] = useState<string>("Education")
    const [isPending, startTransition] = useTransition()

    const TAB_DATA = [{
        title:"Education",
        id:'Education', 
        content:(
            <QualificationContent qualification={education}/>
        )
    }, {
        title:"Experience",
        id:'Experience',
        content:(
            <QualificationContent qualification={experience}/>
        )
    }]

    const handleTab = (id:string) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <>
      <section className="text-center">
            <div className="flex font-extrabold justify-center items-center text-white gap-6">
                <TabButton
                    selectTab={() => handleTab("Education")}
                    active={tab === "Education"}>Education</TabButton>
                <TabButton
                    selectTab={() => handleTab("Experience")}
                    active={tab === "Experience"}>Experience</TabButton>
            </div>
            <div className="text-white lg:flex lg:justify-center lg:items-center lg:flex-col">
                {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
        </section>
    </>
  )
}

export default Qualification