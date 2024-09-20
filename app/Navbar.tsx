import Link from 'next/link'
import NavMobile from './components/NavMobile'
import navigation from '@/data/navigation.json'

const Navbar = () => {
  return (
    <nav className='md:p-8 md:border-b-2 md:border-b-[#242424] md:text-[#cdcdcd]'>
      <div className='hidden md:flex flex-wrap justify-between items-center'>
        <h1>Maxime portfolio</h1>
        <ul className='flex justify-center items-center'>
          {navigation.map((link,index) => {
            return(
              <Link href={link.url} key={index}>
                <li className="list-none mr-6 cursor-pointer">{link.title}</li>
              </Link>
            )
          })}
          
        </ul>
      </div>
      <div className='md:hidden flex justify-center items-center'>
        <NavMobile />
      </div>
    </nav>
  )
}



export default Navbar