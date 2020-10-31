import React, {createContext, useReducer} from 'react'
import {AppReducer} from './AppReducer'

const initialState = {
    transactions : [
        {id: 1, descrition: "Income 1", amount: 200},
        {id: 2, descrition: "Income 2", amount: 200},
        {id: 3, descrition: "Expense 1", amount: -200},
        {id: 4, descrition: "Expense 2", amount: -200}

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function delTransaction(id: any) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add New Transaction Action
    function addTransaction(transaction: any) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }
        >
            { children }
             
        </GlobalContext.Provider>
    )
}