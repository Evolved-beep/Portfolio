import Link from "next/link";
import React from "react";

interface Props {
    href: string, 
    title: string
}

const NavLink = ({href, title}: Props) => {
    return(
            <Link 
            href={href}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-sm md:text-base rounded md:p-0 hover:text-slate-200">{title}</Link>
    )
}

export default NavLink