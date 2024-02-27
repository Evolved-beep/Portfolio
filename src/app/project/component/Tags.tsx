interface ITags {
    tags:string[]
}

const Tags = ({tags}:ITags) => {
    return(
            <div className="flex flex-wrap justify-center items-center">
                {tags.map((tag:string, index) => {
                    return(
                        <div className="border border-white rounded-lg mx-2 my-1 p-2 hover:opacity-90 cursor-pointer">
                        <span key={index}>{tag}</span>
                        </div>
                    )
                })}
            </div>

    )

}

export default Tags