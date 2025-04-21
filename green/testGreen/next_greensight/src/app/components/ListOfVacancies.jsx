"use client"
import { useState, useEffect } from 'react'
import style from './components styles/ListOfVacancies.module.css'
import Filters from './Filters'
import Vacancies from './Vacancies'
import RequestForm from './RequestForm'
import Footer from './Footer'

    export default function ListOfVacancies() {
        const [filters, setFilters] = useState(() => {
            if (typeof window !== 'undefined') {
                const savedValue = localStorage.getItem('vacancyFilters');
                return savedValue ? JSON.parse(savedValue) : { Form: '', Position: '' };
            }
            return { Form: '', Position: '' };
        });
    
        const [paginationCount, setPaginationCount] = useState(() => {
            if (typeof window !== 'undefined') {
                const savedValue = localStorage.getItem('vacanciesCount');
                return savedValue ? parseInt(savedValue) : 5;
            }
            return 5;
        });

        useEffect(() => {
            localStorage.setItem('vacanciesCount', paginationCount.toString());
        }, [paginationCount]);

        useEffect(() => {
            localStorage.setItem('vacancyFilters', JSON.stringify(filters));
        }, [filters]);

        function handleFilterChange(filters){ //Принимает изменения из дочернего компонента
            setFilters(filters)
            setPaginationCount(5);
        }

        function handleClearFilters(){//Принимает сброс фильтров
            const newFilters = { Form: '', Position: '' };
            setFilters(newFilters);
            setPaginationCount(5);
        };

        return (
            <div className={style['hhru']}>
                <h1 className={style['hhru-title']}>List of vacancies</h1>

                <Filters onChange={handleFilterChange} 
                onClear={handleClearFilters} 
                initialFilters={filters}/>

                <Vacancies filters={filters} 
                paginationCount={paginationCount} 
                setPaginationCount={setPaginationCount}
                />

                <RequestForm title={'Leave a request'} subtitle={'We will advise you and help you start a new project'}/>
                
                <Footer/>
            </div>
        )
    }