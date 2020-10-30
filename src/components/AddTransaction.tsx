import React, { useState } from 'react'

export const AddTransaction = () => {
    
    const [description, setDiscription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);

    return (
        <div>
            <h3> Add New Transaction </h3> 
            <form> 
                <div> 
                    <label> Description of Transaction </label>
                    <input
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
                        type="text"
                        id= "descriptionAmount"
                        placeholder="Enter Transaction Amount" 
                        value={transactionAmount}
                        onChange = {(e) => setTransactionAmount(Number(e.target.value))}


                    />
                </div>
                <button> Add Transaction </button>
            </form>
            
        </div>
    )
}
