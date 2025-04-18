import style from "../components styles/CustomSelect.module.css"
import { useState,Fragment } from 'react';
import classNames from 'classnames/bind';
import { Section } from '../../../node_modules/@greensight/gds/src/components/emotion/Section'
const cx=classNames.bind(style);

export default function CustomSelect({values, type, onChange, value}){  // values=[{value:"String", id:"String"},{},{}]

    const [isactive,setActivity]=useState(false); //Состояние для переменной открытия закрытия Select`a

    const selectClass=cx({ //Добавление классов для раскрытия/закрытия элемента
        'select':true,
        'active':isactive,
        'selected':value!=='',
    });

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
        <Section>
            <label className={style['select-type']}>{type}</label>
            <form>
                <div className={selectClass} onClick={togglefunc}>
                    <div className={style["select_title"]}>
                        <span>{value || 'Not selected'}</span>
                    </div>

                    <div className={style["select_content"]} onClick={(e) => e.stopPropagation()}>
                        {container}
                    </div>
                </div>
            </form>
        </Section>
    )
}