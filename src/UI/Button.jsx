import React from 'react'
import {button} from '../App.module.css'

const Button = (props) => {
    return (
        <button className={button} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
