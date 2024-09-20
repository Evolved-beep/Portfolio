import React,{useState} from 'react'

interface ITab {
  active:boolean
  children:string,
  selectTab:React.MouseEventHandler<HTMLButtonElement>
}

  const TabButton = ({active,children,selectTab}:ITab) => {
    return(
        <button className={`${active ? "bg-[#CDCDCD] text-[#050505] rounded-md px-2 py-2.5": "text-[#cdcdcd]" }`} onClick={selectTab}>
            <p className="font-normal">{children}</p>
        </button>
    )

}

export default TabButton