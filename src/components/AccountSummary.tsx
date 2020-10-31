import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    //const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    return (
        <div>
            <div> 
               <h2>  Income </h2>
               <p> $ 0.00 </p>
            </div>
            <div> 
                <h2> Expense </h2>
                <p> $ 0.00 </p>
            </div>
        </div>
    )
}

export default AccountSummary
