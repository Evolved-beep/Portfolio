"use client"
import React, { useState, useTransition } from "react";
import School from "./component/School";
import TabButton from "./UI/TabButton";
import Skills from "./component/Skills";
import Work from "./component/Work";

const TAB_DATA = [{
    title:"Resume",
    id:'resume', 
    content:(
        <School />
    )
}, {
    title:"skills",
    id:'skills',
    content:(
        <Skills />
    )
},{
    title:"work",
    id:'work',
    content:(
        <Work />
    )
}]

const Resume = () => {
    const [tab, setTab] = useState<string>("resume")
    const [isPending, startTransition] = useTransition()

    const handleTab = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return(
        <section className="text-center pt-9 xl:flex xl:justify-center xl:items-center xl:h-screen xl:mx-32">
            <div className="flex font-extrabold justify-center items-center text-white xl:flex-col xl:w-3/12">
                <TabButton
                    selectTab={() => handleTab("resume")}
                    active={tab === "resume"}>Resume</TabButton>
                <TabButton
                    selectTab={() => handleTab("skills")}
                    active={tab === "skills"}>Skills</TabButton>
                <TabButton
                    selectTab={() => handleTab("work")}
                    active={tab === "work"}>Work</TabButton>
            </div>
            <div className="mx-6 mt-8 text-white lg:flex lg:justify-center lg:items-center lg:flex-col xl:w-9/12 xl:items-baseline xl:mx-12">
                {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
        </section>
    )

}

export default Resume