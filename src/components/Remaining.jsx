import React, { useContext } from 'react'
import {remaining, remainingAlert, titleSmall} from '../App.module.css'
import { AppContext } from '../context/AppContext' 

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    },0)

   

    return (
        <>
        {totalExpenses > budget
            ? (
                <div className={remainingAlert}>
                <span className={titleSmall}>Remaining: $ {budget - totalExpenses}</span>
                </div>
                )
            : (
                <div className={remaining}>
                    <span className={titleSmall}>Remaining: $ {budget - totalExpenses}</span>
                </div>
            )
        }
            
        </>
    )
}

export default Remaining
