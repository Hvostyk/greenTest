'use client'
import style from '../components styles/RequestForm.module.css'
import { useInput } from '../../Scripts/hooks/useInput';
import Errors from './Errors';
function Input({ name, type, placeholder, validators, onChange }){
    const inputvalid=useInput('', validators, name, onChange)
    return(
        <div>
            <Errors validators={validators} inputvalid={inputvalid}/>
            <input value={inputvalid.value}
            name={name}
            onChange={e=>inputvalid.handleInputChange(e)} 
            onBlur={e=>inputvalid.onBlur(e)} 
            type={type} 
            placeholder={placeholder} 
            className={style['RequestForm_input']}
            />
        </div>
    )
}

export default Input;