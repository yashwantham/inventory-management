import { createContext, useEffect, useReducer } from "react"
import { inventoryData } from "../db/inventoryData";

export const DataContext = createContext();

export const DataProvider = ({children}) => {



    const DataReducer = () => {}
    const initialState = {productList: JSON.parse(localStorage.getItem("productlist"))};

    const [ dataState, dispatchData ] = useReducer(DataReducer, initialState);

    useEffect(() => {
        localStorage.setItem("productlist", JSON.stringify(inventoryData));
    }, [])

    return (
        <>
        <DataContext.Provider value={{dataState, dispatchData }}>{children}</DataContext.Provider>
        </>
    )
}