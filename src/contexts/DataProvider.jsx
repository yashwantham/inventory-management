import { createContext } from "react"

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    

    return (
        <>
        <DataContext.Provider value={1}>{children}</DataContext.Provider>
        </>
    )
}