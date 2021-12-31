import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import {list} from '../App.module.css'
import { AppContext } from '../context/AppContext'


const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    return (
        <ul className={list}>
            {expenses.map(expense => (
            <ExpenseItem 
                key={expense.id}
                data={expense}
            />
            ))}
        </ul>
    )
}

export default ExpenseList
