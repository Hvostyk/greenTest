import { useState, useEffect } from 'react'
import style from './components styles/ListOfVacancies.module.css'
import Filters from './Filters'
import Vacancies from './Vacancies'
import RequestForm from './RequestForm'
import Footer from './Footer'

    export default function ListOfVacancies() {

        let savedFilters = JSON.parse(localStorage.getItem('vacancyFilters')) || {
            Form: '',
            Position: ''
        };
        let savedPagination = parseInt(localStorage.getItem('vacanciesCount')) || 5
    
        const [filters, setFilters] = useState(savedFilters);
        const [paginationCount, setPaginationCount] = useState(savedPagination);

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
                initialFilters={savedFilters}/>

                <Vacancies filters={filters} 
                paginationCount={paginationCount} 
                setPaginationCount={setPaginationCount}
                />

                <RequestForm title={'Leave a request'} subtitle={'We will advise you and help you start a new project'}/>
                
                <Footer/>
            </div>
        )
    }