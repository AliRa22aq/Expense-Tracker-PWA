import React from 'react'

export const Transaction = ({transaction}) => {
    console.log(transaction);

    return (
        <div>
            <li>
                {transaction.descrition} |
                <span>  {transaction.amount} </span>
                <button> X </button>
            </li>
        </div>
    )
}
