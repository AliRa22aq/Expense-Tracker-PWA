import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import {Grid} from '@material-ui/core';


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
        <Grid container>
            <Grid item xs={12} lg={6}>
                <h2>  Income </h2>
                <p> $ {income} </p>
            </Grid>
            <Grid item xs={12} lg={6}>
                <h2> Expense </h2>
                <p> $ {expense} </p>
            </Grid>
            
        </Grid>
        
    )
}

export default AccountSummary
