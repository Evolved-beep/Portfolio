import React from 'react'
import navigation from "@/data/navigation.json"

const NavMobile = () => {
  return (
    <div className='fixed bottom-0 w-8/12 h-16 z-50 bg-[#CDCDCD] flex flex-row justify-center items-center mb-4 rounded-full '>
        <ul className='flex mx-8 flex-row w-full justify-between items-center'>
          {navigation.map((link,index) => {
            return(
              <div>
                <img src={link.icon} alt={`icon ${link.title}`} />
              </div>
            )
          })}
        </ul>
    </div>
    
  )
}

export default NavMobile