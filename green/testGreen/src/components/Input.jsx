import {useEffect, useState } from 'react';
import style from '../Styles/RequestForm.module.css'

function Errors({validators,inputvalid}){ //отображаемые ошибки
    const errors=[]

    for(const item in validators){
        switch (item){
            case 'minLength':
                if(inputvalid.isdirty && inputvalid.lengthError){
                    errors.push(<div className={style['Error']}>Минимум {validators[item]} знака</div>)
                }
                break;
            
            case 'isEmpty':
                if(inputvalid.isdirty && inputvalid.isEmpty){  
                    errors.push(<div className={style['Error']}>Пустое поле</div>)
                }
                break;
            
            case 'maskError':
                if(inputvalid.isdirty && inputvalid.maskError){
                    errors.push(<div className={style['Error']} >Неккоректный email</div>)
                }
                break;

            case 'telError':
                if(inputvalid.isdirty && inputvalid.telError){
                    errors.push(<div className={style['Error']} >Неккоректный номер телефона</div>)
                }
            
            default:
                break;
        }
        
    }
    return (<>{errors}</>);
}

function Input({ name, type, placeholder, validators, onChange }){

    const useValidation= (value , validators)=>{ //хук валидации
        const [lengthError,setlengthError]=useState(false)
        const [isEmpty,setEmpty]=useState(true)
        const [maskError,setmaskError]=useState(true)
        const [telError,setTelError]=useState(true)
        
    useEffect(()=>{
        for(const item in validators){
            switch (item){
                case 'minLength':
                    value.length < validators[item] ? setlengthError(true) : setlengthError(false);
                    break;
                
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                
                case 'maskError':
                    (!validators[item].test(String(value).toLowerCase()))  ? setmaskError(true) : setmaskError(false);
                    break;

                case 'telError':
                    (!validators[item].test(String(value).toLowerCase()))  ? setTelError(true) : setTelError(false);
                    break;
            }
        }
    }, [value])

    return{
        isEmpty,
        lengthError,
        maskError,
        telError,
    }
        
    }
    
    const useInput = (initialValue, validators) => { //хук для взаимодействия с input и получения из них данных
        const [value, setValue] = useState(initialValue);
        const [isdirty, setDirty] = useState(false);
        const valid = useValidation(value, validators);

        // Переименовываем внутренний обработчик
        const handleInputChange = (e) => {
            setValue(e.target.value);
        };

        useEffect(() => {
            // Вызываем внешний обработчик с именем и значением
            if (onChange) {
                onChange(name, value);
            }
        }, [value]);

        const onBlur = () => {
            setDirty(true);
        };

        return {
            value,
            handleInputChange, // Новое имя функции
            isdirty,
            onBlur, // Переименовано для consistency
            ...valid
        };
    };
    const inputvalid=useInput('', validators)
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