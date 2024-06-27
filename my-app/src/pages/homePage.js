import {  useContext } from "react"
import { FoodContext } from "../Context"
import { useNavigate } from "react-router-dom"



export const HomePage  =()=>{
const { getItems ,  } = useContext(FoodContext)

const navigate = useNavigate()
const getAllCategory = getItems.map((e)=>e.category).flat()
const getUniqueCategory = getAllCategory.filter((item , index)=> getAllCategory.indexOf(item) === index)


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
        <div className="itemsListHome">
            {
                getItems.map((e)=><div id={e.id}>
                    <img src={e.image} alt=""></img>
                    <p>{e.restroName}</p>
                    <p>{e.rating}</p>
                    <p>{e.info}</p>
                </div>)
            }
        </div>
    </div>)
}