import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const AccountSummary = () => {

    const { transactions, check } = useContext(GlobalContext);

    const transactionAmounts = transactions.map((transaction: { transactionAmount: any; }) => transaction.transactionAmount);

    const income = transactionAmounts
        .filter((transaction: number) => transaction > 0)
        .reduce((acc: any, transaction: any) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter((transaction: number) => transaction < 0)
        .reduce((acc: any, transaction: any) => (acc += transaction), 0)
        ).toFixed(2);


    return (
        <div>
            <div> 
               <h2>  Income </h2>
               <p> $ {income} </p>
            </div>
            <div> 
                <h2> Expense </h2>
            <p> $ {expense} </p>
            </div>
        </div>
    )
}

export default AccountSummary
