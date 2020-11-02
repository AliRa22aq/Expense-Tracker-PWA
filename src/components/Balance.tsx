import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    
    const transactionAmounts = transactions.map((transaction: { transactionAmount: any; }) => transaction.transactionAmount);
    console.log(transactions)

    const balance = transactionAmounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${balance}</h1>
        </div>
    )
}
