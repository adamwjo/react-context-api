import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flowers', amount: -10 },
        { id: 2, text: 'Dinner', amount: -21 },
        { id: 3, text: 'Paycheck', amount: 1000 },
        { id: 4, text: 'Book', amount: -20 },
        { id: 5, text: 'Venmo', amount: 10 },
        { id: 6, text: 'Paycheck', amount: 200 }
    ]
}

export const GlobalContext = createContext(initialState)

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }


    return (<GlobalContext.Provider 
                value={{
                    transactions: state.transactions,
                    deleteTransaction,
                    addTransaction
                    }}>
                        { children }
            </GlobalContext.Provider>)

}