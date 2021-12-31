import React, { useContext } from 'react'
import {budgetSt, titleSmall} from '../App.module.css'
import Button from '../UI/Button'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {budget} = useContext(AppContext);
    return (
        <div className={budgetSt}>
              <span className={titleSmall}>Budget: $ {budget}</span>
              <Button>Edit</Button>
        </div>
    )
}

export default Budget
