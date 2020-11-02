import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ( transaction: any ) => {

    console.log(transaction);

    const {delTransaction} = useContext(GlobalContext);


    const sign = transaction.transactionAmount > 0 ? '+' : '-';


    return (
        <div>
            <li>
                {transaction.descrpition} |
                <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
                <button onClick={()=> delTransaction(transaction.id)}> X </button>
            </li>
        </div>
    )
}
