import {  useContext, useState } from "react"
import { FoodContext } from "../Context"
import { useNavigate } from "react-router-dom"
import { DataArray } from "../db/Data"




export const HomePage  =()=>{
const { getItems , setItems } = useContext(FoodContext)
const [ getRestArr , setRestArr] = useState(DataArray)

const navigate = useNavigate()
const getAllCategory = getItems.map((e)=>e.category).flat()
const getUniqueCategory = getAllCategory.filter((item , index)=> getAllCategory.indexOf(item) === index)

const GetSortHandler =(value)=>{
    console.log(value)
    if(value === "rating"){

        const sortByrating = [...getRestArr].sort((a,b)=>b.rating - a.rating)
        console.log(sortByrating)
        setRestArr(sortByrating)
    }else if(value === "lowToHigh"){

        const sortByLowToHigh = [...getRestArr].sort((a,b)=>a.budget - b.budget)
        console.log(sortByLowToHigh)
        setRestArr(sortByLowToHigh)
    }else if(value === "HighToLow"){

        const sortByHighToLow = [...getRestArr].sort((a,b)=>b.budget - a.budget)
        console.log(sortByHighToLow)
        setRestArr(sortByHighToLow)
    } else if(value === "delivery"){

        const sortByDelivery = [...getRestArr].sort((a,b)=>a.delivery_time - b.delivery_time)
        
        setRestArr(sortByDelivery)
    }
    else{
       setRestArr(DataArray)
    }

   

}

    return(<div>
        <h1>HomePage</h1>
        <div className="homeCategoryNav">
            <p>What's on your mind?</p>
        {
            getUniqueCategory.map((e)=>{

                
                if(e === "Burger"){
                    return(<div  >
                        <img onClick={()=>navigate(`/${e}`)} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" alt=""></img>
                        
                    </div>)
                }else if(e === "Pizza"){
                    return(<div>
                        <img onClick={()=>navigate(`/${e}`)}  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" alt=""></img>

                    </div>)
                }else if(e === "Desserts"){
                    return(<div >
                        <img onClick={()=>navigate(`/${e}`)}  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt=""></img>
                    </div>)
                
                }
            
        })
        }
        </div>
        <select onChange={(e)=>GetSortHandler(e.target.value)}>
            <option>Sort</option>
            <option value="rating" >Rating</option>
            <option value="lowToHigh">Cost:LowtoHigh</option>
            <option value="HighToLow">Cost:HightoLow</option>
            <option value="delivery">Delivery Time</option>
        </select>
        <div className="itemsListHome">
       
            {
                getRestArr.map((e)=><div onClick={()=>navigate(`/restaurants/${e.restroName}`)} id={e.id}>
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