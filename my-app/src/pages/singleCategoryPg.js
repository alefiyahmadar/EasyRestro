import { useParams } from "react-router-dom"

export const SingleCategory = ()=>{

    const {singleCategory} = useParams()
    console.log(singleCategory)
    return(<div>
        <p>{singleCategory}</p>
    </div>)
}