import { useContext } from "react"
import { useParams } from "react-router-dom"
import { FoodContext } from "../Context"

export const SingleRestro = ()=>{

    const {singleRestro} = useParams()
    const {getItems} = useContext(FoodContext)
    


    const getRestro = getItems.find((e)=> e.restroName === singleRestro)
    

console.log(getRestro)


    return(<div>
        
        <h2>{getRestro.restroName}</h2>
        <div className="singleRestroInfo">
        <span >
            <p>{getRestro.rating}⭐</p>
            <p>{getRestro.budget}</p>
        </span>
        <h4>{getRestro.info}</h4>
        </div>

        <div>
            <p>recommended</p>
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