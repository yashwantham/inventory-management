import { createContext, useEffect, useReducer } from "react"
import { inventoryData } from "../db/inventoryData";

export const DataContext = createContext();

export const DataProvider = ({children}) => {



    const DataReducer = (state, action) => {

        switch(action.type) {

            case "set_productList": {
                return {...state, productList: action.payload}
            }

            case "set_deptFilterOption": {
                return {...state, deptFilterOption: action.payload}
            }

            case "toggle_lowStockItemsCheck": {
                return {...state, lowStockItemsCheck: !state.lowStockItemsCheck}
            }

            case "set_sortOrder": {
                return {...state, sortOrder: action.payload}
            }

            default: {
                return state;
            }

        }

    }

    const initialState = {productList: localStorage.getItem("productlist") ? JSON.parse(localStorage.getItem("productlist")) : inventoryData, deptFilterOption: "all-departments", lowStockItemsCheck: false, sortOrder: "name"};

    const [ dataState, dispatchData ] = useReducer(DataReducer, initialState);

    return (
        <>
        <DataContext.Provider value={{dataState, dispatchData }}>{children}</DataContext.Provider>
        </>
    )
}