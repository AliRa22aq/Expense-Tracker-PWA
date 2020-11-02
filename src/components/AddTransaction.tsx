import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    
    const [description, setDiscription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e: any) => {
        e.preventDefault();
        const newTransaction: {id: number, description: string, transactionAmount: number} = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return (
        <div onSubmit={onSubmit}>
            <h3> Add New Transaction </h3> 
            <form> 
                <div> 
                    <label> Description of Transaction </label>
                    <input
                        required
                        type="text"
                        id= "description"
                        placeholder="Transaction details" 
                        value={description}
                        onChange = {(e) => setDiscription(e.target.value)}
                        
                    />
                </div>
                <div>
                <label> Amount of Transaction </label>
                    <input
                        type="number"
                        id= "descriptionAmount"
                        placeholder="Enter Transaction Amount" 
                        value={transactionAmount}
                        onChange = {(e) => setTransactionAmount(parseInt(e.target.value))}
                        required
                    />
                </div>
                <button> Add Transaction </button>
            </form>
            
        </div>
    )
}
