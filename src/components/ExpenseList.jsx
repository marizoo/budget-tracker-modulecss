import React, { useContext, useState, useEffect } from 'react'
import ExpenseItem from './ExpenseItem'
import {list, inputSearch} from '../App.module.css'
import { AppContext } from '../context/AppContext'


const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || [])

    useEffect( () => {
        setFilteredExpenses(expenses);
    }, [expenses])

    const handleChange = (ev) => {
        const searchResults = expenses.filter( (filteredExpense) =>     
            filteredExpense.name.toLowerCase().includes(ev.target.value)
            );
        setFilteredExpenses(searchResults);
    }

    return (
        <>
            <input 
                type="text"
                className={inputSearch}
                placeholder='Type to search...'
                onChange={handleChange}    
            />

            <ul className={list}>
                {filteredExpenses.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    data={expense}
                />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList
