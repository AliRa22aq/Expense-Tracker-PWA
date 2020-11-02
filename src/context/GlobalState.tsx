import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'



const initialState: any = {
    transactions : []
}

console.log(initialState)


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( props: any) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const delTransaction = (id: number) => {
        console.log(id)
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add New Transaction Action
    const addTransaction = (transaction: any) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction,
            addTransaction
        }}>
            { props.children}

        </GlobalContext.Provider>
    )
}