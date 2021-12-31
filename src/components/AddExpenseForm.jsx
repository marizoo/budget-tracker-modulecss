import React, {useContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Button from '../UI/Button';
import {addForm, addInput} from '../App.module.css'
import { AppContext } from '../context/AppContext';

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const submitAddForm = (ev) => {
        ev.preventDefault();

        const newItems = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: newItems,
        })

        setName('');
        setCost('')
    }

    return (
        <form className={addForm} onSubmit={submitAddForm}>
            <input 
                className={addInput} 
                placeholder='Name'
                type="text" 
                name="name"  
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
            <input 
                className={addInput} 
                placeholder='Cost'
                type="text" 
                name="name"  
                value={cost}
                onChange={(ev) => setCost(ev.target.value)}
            />
            <Button type="submit">Save</Button>
        </form>
    )
}

export default AddExpenseForm
