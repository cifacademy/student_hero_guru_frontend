import React from 'react'
import './InputDefault.css'

export const InputDefault = (props) => {
    return (
        <input className='inputreusable_inputdefault' type={'text'} placeholder={props.placeholder}/>
    )
}
