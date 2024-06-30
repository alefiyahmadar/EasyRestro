import { createContext, useState } from "react";
import { DataArray } from "./db/Data";

export const FoodContext = createContext()

export const Contextprovider = ({children})=>{
    const [getCategoryArr , setCategoryArr] = useState([])
    const [getItems , setItems] = useState(DataArray)

    const GetSortHandler =(value)=>{
        console.log(value)

        if(value === "rating")

    }
    
    

    return(<FoodContext.Provider value={{ getCategoryArr , setCategoryArr , getItems , setItems  , GetSortHandler}}>
        {children}
    </FoodContext.Provider>)
}