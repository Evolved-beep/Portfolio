interface IButton {
    content:string
}

const Button = ({content}:IButton) => {
    return(
        <button className="max-w-screen-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-1 mb-4 mr-4">
                    <div className="flex h-full w-full items-center justify-center bg-gray-800">
                        <p className="px-4 py-2 text-sm md:text-base text-white">{content}</p>
                    </div>
        </button>
    )

}

export default Button