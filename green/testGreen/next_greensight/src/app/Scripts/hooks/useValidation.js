import {useEffect, useState } from 'react';

export function useValidation(value , validators){ //хук валидации
    const [lengthError,setlengthError]=useState(true)
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
                    (value.length<11 || !validators[item].test(String(value).toLowerCase()))  ? setTelError(true) : setTelError(false);
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