import React from 'react'
import {titleSmall} from '../App.module.css'
import Button from '../UI/Button'

const BudgetView = ({onhandleEditClick, budget}) => {
    return (
        <>
            <span className={titleSmall}>Budget: $ {budget}</span>
                    <Button onClick={onhandleEditClick}>Edit</Button>
        </>
    )
}

export default BudgetView
