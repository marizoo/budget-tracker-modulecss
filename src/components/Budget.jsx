import React, { useContext, useState } from 'react'
import {budgetSt, titleSmall, inputEdit} from '../App.module.css'
import Button from '../UI/Button'
import { AppContext } from '../context/AppContext'
import BudgetView from './BudgetView'
import BudgetEdit from './BudgetEdit'

const Budget = () => {
    const [isEdit, setIsEdit] = useState(false);
    const {budget, dispatch} = useContext(AppContext);

    // EDIT BUTTON
    const handleEditClick = () => {
        setIsEdit(true);
    }
    const handleSaveClick = (value) => {
       

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEdit(false);
    }

    return (
        <div className={budgetSt}>
            {!isEdit && (
                <BudgetView 
                onhandleEditClick={handleEditClick} 
                budget={budget}
                />
            )}
            {isEdit && (
                <BudgetEdit 
                onHandleSaveClick={handleSaveClick}
                budget={budget}
                />
            )}
              
        </div>
    )
}

export default Budget
