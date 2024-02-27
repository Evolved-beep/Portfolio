import React from "react";

const TabButton = ({active,children,selectTab}: any) => {
    const buttonClass = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

    return(
        <button className="xl:m-4" onClick={selectTab}>
            <p className={`mr-6 font-semibold hover:text-white ${buttonClass} xl:`}>{children}</p>
        </button>
    )

}

export default TabButton