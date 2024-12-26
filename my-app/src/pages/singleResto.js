import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { FoodContext } from "../Context"
import { DataArray } from "../db/Data"

export const SingleRestro = ()=>{

    const {singleRestro} = useParams()
    const {getItems} = useContext(FoodContext)
    const [isClickedVeg , setIsClickedVeg] = useState(false)
    const [isClickNonVeg , setsClickNonVeg] = useState(false)
    
const [getRestro , setRestro] = useState(getItems.find((e)=> e.restroName === singleRestro))

    const dataB = DataArray.find((e)=>e.restroName === singleRestro)
    

console.log(getRestro)
const VegHandler =(value)=>{

    console.log(value)

    if(value ==="Veg"){
        setIsClickedVeg(true)
        const getVeg = dataB.items.filter((e)=>e.is_vegetarian === true)
        setRestro({...getRestro , items:getVeg})

    }else if(value === "NonVeg"){
        setsClickNonVeg(true)
        const getNonVeg = dataB.items.filter((e)=>e.is_vegetarian === false)
        setRestro({...getRestro , items:getNonVeg})
    }

}
const RemoveFilterHandler =(e)=>{

    if(e=== "Veg"){

        setRestro(dataB)
        setIsClickedVeg(false)
    }else if(e === "NonVeg"){

        setRestro(dataB)
        setsClickNonVeg(false)
    }
}

const InputHandler = (Input) =>{

    console.log(Input)
    const getVegFilter = isClickedVeg ? dataB.items.filter((e)=>e.is_vegetarian === true) : dataB.items
    const getFilter = getVegFilter.filter((e)=>e.name.toLowerCase().includes(Input.toLowerCase()))
    console.log(getFilter)
    setRestro({...getRestro , items:getFilter})
}


console.log(getRestro)
    return(<div>
        
        <h2>{getRestro.restroName}</h2>
        <div className="singleRestroInfo">
        <span >
            <p>{getRestro.rating}⭐</p>
            <p>{getRestro.budget} for two</p>
        </span>
        <h4>{getRestro.info}</h4>
        </div>

        <div>
            <p>Menu</p>
            <input type="text" placeholder="Search for dishes" onChange={(e)=>InputHandler(e.target.value)}></input>
            <span>  
                <button value="Veg" disabled={isClickNonVeg ? true :false} style={{backgroundColor:isClickedVeg?"orange" :"white" }} onClick={ isClickedVeg ? (e)=>RemoveFilterHandler(e.target.value) :(e)=>VegHandler(e.target.value)}>Veg</button>
                <button value="NonVeg" disabled={isClickedVeg ? true :false} style={{backgroundColor:isClickNonVeg?"orange" :"white"}} onClick={isClickNonVeg ? (e)=>RemoveFilterHandler(e.target.value) :(e)=>VegHandler(e.target.value)}>Non-Veg</button>
            </span>
            {
                getRestro.items.map((e)=><div id={e.id} className="restroDish">
                    <img src={e.img} alt=""></img>
                    <span>
                    <h3>{e.name}</h3>
                    <p>{e.price}</p>
                    <p>{e.rating}</p>
                    <p>{e.ing}</p>
                    </span>
                    
                </div>)
            }
        </div>
    </div>)
}