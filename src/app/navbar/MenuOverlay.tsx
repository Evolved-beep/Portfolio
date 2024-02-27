import react from 'react'
import NavLink from './UI/NavLink';
import { Folder, User, GraduationCap} from 'lucide-react';
import Link from 'next/link';

const MobileNavBar = [{
    content: <Folder color='white' />,
    Link:"/project"
},{
    content: <User color='white' />,
    Link:'/about'
},{
    content: <GraduationCap color='white' />,
    Link:'/resume'
}]

const MenuOverlay = () => {
    return(
        <div className='fixed mb-4 h-16 rounded-full bottom-0 w-8/12 z-50 bg-[#1A1A1A] flex flex-row justify-center items-center'>
            <ul className='flex mx-8 flex-row w-full justify-between items-center'>
                {MobileNavBar.map((mobilenav, index) => {
                    return(
                        <Link href={mobilenav.Link} key={index}>
                            <li>{mobilenav.content}</li>
                        </Link>
                    )
                })}

            </ul>

        </div>
    )
}

export default MenuOverlay