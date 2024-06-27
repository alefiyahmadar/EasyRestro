import { createContext, useState } from "react";
import { DataArray } from "./db/Data";

export const FoodContext = createContext()

export const Contextprovider = ({children})=>{
    const [getCategoryArr , setCategoryArr] = useState([])
    const [getItems , setItems] = useState(DataArray)
    
    

    return(<FoodContext.Provider value={{ getCategoryArr , setCategoryArr , getItems , setItems }}>
        {children}
    </FoodContext.Provider>)
}