import React, { useContext } from 'react'
import {listItem, listExpenses, right, titleExpenses, left, price, deleteButton} from '../App.module.css'
import { AppContext } from '../context/AppContext'

const ExpenseItem = ({data}) => {
    const {dispatch} =useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: data.id,
        })
    }

    return (
        <li className={listItem}>
            <div className={listExpenses}>
                <div className={left}>
                    <span className={titleExpenses}>{data.name}</span>
                </div>
                <div className={right}>
                    <div className={price}>${data.cost}</div>
                    <button onClick={handleDeleteExpense} className={deleteButton}>x</button>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem
