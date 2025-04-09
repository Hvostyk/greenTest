import { Section } from '../../node_modules/@greensight/gds/src/components/emotion/Section'
import classNames from 'classnames/bind';
import { useState } from 'react';
import CustomSelect from './customSelect';
import style from '../Styles/Filters.module.css';
const cx=classNames.bind(style);
export default function Filters({onChange, onClear, initialFilters}){
    const [filters, setFilters] = useState(initialFilters);
    

    const filterClear=cx({
        'filters-clear':true,
        'disabled':filters.Form==='' && filters.Position==='',
    })

    const FilterChange = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleFiltersChange=()=>{
        onChange(filters)
    }

    const remove = () => { //функция обнуления фильтров
        const newFilters = { Form: '', Position: '' };
        setFilters(newFilters);
        onChange(newFilters);
        onClear();
    };

    return(
        <Section>
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

        <div className={filterClear} onClick={remove}>

            <div className={style['filters-clear_image']}>
                
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" 
                d="M9.0203 1.02018C9.21556 0.824917 9.21556 0.508335 9.0203 0.313073C8.82504 0.11781 8.50846 0.11781 8.31319 0.313073L4.66675 3.95952L1.0203 0.313073C0.825039 0.11781 0.508457 0.11781 0.313195 0.313073C0.117932 0.508335 0.117932 0.824917 0.313195 1.02018L3.95964 4.66663L0.313195 8.31307C0.117932 8.50834 0.117932 8.82492 0.313195 9.02018C0.508457 9.21544 0.825039 9.21544 1.0203 9.02018L4.66675 5.37373L8.31319 9.02018C8.50846 9.21544 8.82504 9.21544 9.0203 9.02018C9.21556 8.82492 9.21556 8.50834 9.0203 8.31307L5.37386 4.66663L9.0203 1.02018Z" 
                />
                </svg>

            </div>

            <div className={style['filters-clear_text']}>Clear filters</div>
        </div>
    </Section>
    )
}