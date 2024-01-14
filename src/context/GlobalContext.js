import React, {createContext,useReducer} from "react";
import AppReducer from './AddReducer'

// Initial state
const initialState = {
    transaction: [
        {id: 1,text: "Exam fee",amount: -2000},
        {id: 1,text: "Admission",amount: -7000},
        {id: 1,text: "Mutal Fund",amount: -200},
        {id: 1,text: "Share",amount: -4000},
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    return (<GlobalContext.Provider value={{
        transaction: state.transaction
    }}>{children}</GlobalContext.Provider>)
}