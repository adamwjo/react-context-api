import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionForm = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [name, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text: name,
            amount: +amount
        }

        console.log(newTransaction);

        addTransaction(newTransaction)

        setText("")
        setAmount("")
    }
     
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={name} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
