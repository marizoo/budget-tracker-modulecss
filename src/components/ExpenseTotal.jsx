import React, { useContext } from 'react'
import {expenseTotal, titleSmall} from '../App.module.css'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    },0)

    return (
        <div className={expenseTotal}>
            <span className={titleSmall}>Spent so far: $ {totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal
