import React, {useState} from 'react'
import {inputEdit} from '../App.module.css'
import Button from '../UI/Button'

const BudgetEdit = ({budget, onHandleSaveClick}) => {

    const [value, setValue] = useState({budget})

    return (
        <>
            <input 
            required
            type='number'
            className={inputEdit} 
            placeholder='new budget'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            />
            <Button 
            onClick={() => onHandleSaveClick(value)} 
            type="button"
            >
            Save
            </Button>
        </>
    )
}

export default BudgetEdit
