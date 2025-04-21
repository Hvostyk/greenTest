'use client'
import classNames from 'classnames/bind';
import { useState,useEffect } from 'react';
import CustomSelect from './controls/CustomSelect.jsx';
import { CrossIcon } from '../Scripts/icons/crossIcon.jsx';
import style from './components styles/Filters.module.css';
const cx=classNames.bind(style);

export default function Filters({onChange, onClear, initialFilters}){
    const [isMounted, setIsMounted] = useState(false); //Состояние для определения клиентской части
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        setIsMounted(true);     
    }, []);

    const filterClear=()=>{
        if(isMounted){
            return(
                cx({ //Активация скрытой кнопки "clear filters"
                'filters-clear':true,
                'disabled':filters.Form==='' && filters.Position==='',
                })
            )
        }
    }

    const FilterChange = (type, value) => { //callback принимающий значения филтьтров из дочернего компонента
        setFilters(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleFiltersChange=()=>{ //callback отправляющий значения фильтров в родительский компонент
        onChange(filters)
    }

    const remove = () => { //функция обнуления фильтров
        const newFilters = { Form: '', Position: '' };
        setFilters(newFilters);
        onChange(newFilters);
        onClear();
    };

    return(
        <>
        <div className={style['filters']}>

            <CustomSelect values={[{
                value:'Full time',
                id:'fulltime',
                enable:true,
            },{
                value:'Half time',
                id:'halftime',
                enable:false,
            },{
                value:'Part time',
                id:'parttime',
                enable:true,
            }]} type='Form' onChange={FilterChange} value={filters.Form}/>

            <CustomSelect values={[{
                value:'Frontend',
                id:'frontend',
                enable:true,
            },{
                value:'Backend',
                id:'backend',
                enable:true,
            },{
                value:'QA',
                id:'qa',
                enable:true,
            }]} type='Position' onChange={FilterChange} value={filters.Position}/>

            <button className={style['filters_button']} type='submit' onClick={handleFiltersChange}>Search </button>

        </div>

        <div className={filterClear()} onClick={remove}>

            <div className={style['filters-clear_image']}>
                <CrossIcon/>
            </div>

            <div className={style['filters-clear_text']}>Clear filters</div>
        </div>
    </>
    )
}