'use client'
import style from "../components styles/CustomSelect.module.css"
import { useState,Fragment,useEffect } from 'react';
import classNames from 'classnames/bind';
const cx=classNames.bind(style);

export default function CustomSelect({values, type, onChange, value}){  // values=[{value:"String", id:"String"},{},{}]
    const [isMounted, setIsMounted] = useState(false); //Состояние для определения клиентской части
    const [isactive,setActivity]=useState(false); //Состояние для переменной открытия закрытия Select`a

    useEffect(() => {
        setIsMounted(true);     
    }, []);

    const selectClass=()=>{
        if(isMounted){
            return(
                cx({ //Добавление классов для раскрытия/закрытия элемента
                    'select':true,
                    'active':isactive,
                    'selected':value!=='',
                })
            )
        }        
    }

    const togglefunc=()=>{ //функция открытия закрытия Select`a
        if(isactive){
            setActivity(false);
        }
        else{
            setActivity(true);
        }
    }

    const OptionChange = (value) => { //функция изменения выбора Option`a
        setActivity(false);
        onChange(type, value);
    };

    const getDisplayValue = () => {
        if (!isMounted) return 'Loading...'; // Единообразное значение для SSR
        return value || 'Not selected';
        
    };
    

    const container = values.map((item) => ( //Кастомный Option
        <Fragment key={item.id}>
            <input 
                id={item.id}
                className={style["select_input"]} 
                type="radio" 
                value={item.value}
                checked={value === item.value}
                onChange={(e) => OptionChange(e.target.value)}
                disabled={!item.enable}
            />
            <label 
                htmlFor={item.id}
                className={style["select_label"]}
            >
                <span>{item.value}</span>
            </label>
        </Fragment>
    ));

    return(
        <div className={style['Select-body']}>
            <label className={style['select-type']}>{type}</label>
            <form>
                <div className={selectClass()} onClick={togglefunc}>
                    <div className={style["select_title"]}>
                        <span>{getDisplayValue()}</span>
                    </div>

                    <div className={style["select_content"]} onClick={(e) => e.stopPropagation()}>
                        {container}
                    </div>
                </div>
            </form>
        </div>
    )
}