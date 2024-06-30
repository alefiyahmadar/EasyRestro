import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { FoodContext } from "../Context"

export const SingleCategory = ()=>{

const {getItems , GetSortHandler} = useContext(FoodContext)

    const {singleCategory} = useParams()
    const navigate = useNavigate()
    console.log(singleCategory)
    console.log(getItems)
    const categoryRestoArr = []
    const getCategoryRestro = getItems.map((e)=>{
        if(e.category.includes(singleCategory)){
            categoryRestoArr.push(e)
        }else{
            
        }
    })

    
    console.log(categoryRestoArr)


    return(<div>
        <p>{singleCategory}</p>
        <select onChange={(e)=>GetSortHandler(e.target.value)}>
            <option>Sort</option>
            <option value="rating" >Rating</option>
            <option value="lowToHigh">Cost:LowtoHigh</option>
            <option value="HighToLow">Cost:HightoLow</option>
        </select>
        <div className="itemsListHome">
            {
                categoryRestoArr.map((e)=><div onClick={()=>navigate(`/restaurants/${e.restroName}`)} id={e.id}>
                    <img src={e.image} alt=""></img>
                    <p>{e.restroName}</p>
                    <p>{e.rating}</p>
                    <p>{e.info}</p>
                </div>)
            }
           
        </div>
    </div>)
}