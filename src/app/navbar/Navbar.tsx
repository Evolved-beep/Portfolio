"use client"
import { useState } from "react"
import { AlignJustify, X } from "lucide-react"
import MenuOverlay from "./MenuOverlay"
import NavLink from "./UI/NavLink"
import Link from "next/link"

interface ILink {
    title:string, 
    href: string
}

const LinkArray: ILink[] = [{
    title: 'Resume', 
    href:"/resume"
},{
    title:'Project', 
    href:'/project'
},{
    title:'About me',
    href:'/about'
}]

const Navbar = () => {
    return(
        <nav className="mx-auto w-full bg-[#121212] border-b">
            <div className="flex flex-wrap justify-between items-center p-8">
                    <Link href={"/"}><span className="text-lg md:text-1xl text-white font-semibold">Maxime Magnier</span></Link>
            <div className="menu hidden md:flex md:justify-center md:items-center" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {LinkArray.map((link, index) => {
                            return(
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title}/>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
        <div className="md:hidden flex justify-center items-center">
            <MenuOverlay />
        </div>
        </nav>
    )

}

export default Navbar