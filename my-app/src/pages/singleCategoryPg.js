import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { FoodContext } from "../Context"

export const SingleCategory = ()=>{

const {getItems , setItems } = useContext(FoodContext)
const {singleCategory} = useParams()
const [ getArray , setArray] = useState(getItems.filter((e)=>e.category.includes(singleCategory)))

 
    const navigate = useNavigate()
    console.log(singleCategory)
    console.log(getItems)
    
 

    console.log(getArray)

    const GetSortHandler =(value)=>{
        console.log(value)
        if(value === "rating"){

            const sortByrating = [...getArray].sort((a,b)=>b.rating - a.rating)
            console.log(sortByrating)
            setArray(sortByrating)
        }else if(value === "lowToHigh"){

            const sortByLowToHigh = [...getArray].sort((a,b)=>a.budget - b.budget)
            console.log(sortByLowToHigh)
            setArray(sortByLowToHigh)
        }else if(value === "HighToLow"){

            const sortByHighToLow = [...getArray].sort((a,b)=>b.budget - a.budget)
            console.log(sortByHighToLow)
            setArray(sortByHighToLow)
        }
        else if(value === "delivery"){

            const sortByDelivery = [...getArray].sort((a,b)=>a.delivery_time - b.delivery_time)
            
            setArray(sortByDelivery)
        }else{
           setArray(getItems.filter((e)=>e.category.includes(singleCategory)))
        }

       

    }
    
    


    return(<div>
        <p>{singleCategory}</p>
        <select onChange={(e)=>GetSortHandler(e.target.value)}>
            <option>Sort</option>
            <option value="rating" >Rating</option>
            <option value="lowToHigh">Cost:LowtoHigh</option>
            <option value="HighToLow">Cost:HightoLow</option>
            <option value="delivery">Delivery Time</option>
        </select>
        <div className="itemsListHome">
            {
            getArray.map((e)=><div onClick={()=>navigate(`/restaurants/${e.restroName}`)} id={e.id}>
                    <img src={e.image} alt=""></img>
                    <p>{e.restroName}</p>
                    <p>{e.rating}</p>
                    <p>{e.budget} for two</p>
                    <p>{e.delivery_time}mins</p>
                    <p>{e.info}</p>
                </div>)
            }
           
        </div>
    </div>)
}