import { useState, useEffect } from 'react'
import style from '../Styles/ListOfVacancies.module.css'
import Filters from './Filters'
import Vacancies from './Vacancies'
import RequestForm from './RequestForm'
import Footer from './Footer'
    export default function ListOfVacancies() {

        const savedFilters = JSON.parse(localStorage.getItem('vacancyFilters')) || {
            Form: '',
            Position: ''
        };

        const savedPagination = parseInt(localStorage.getItem('vacanciesCount')) || 5
    
        const [filters, setFilters] = useState(savedFilters);
        const [paginationCount, setPaginationCount] = useState(savedPagination);

        useEffect(() => {
            localStorage.setItem('vacanciesCount', paginationCount.toString());
        }, [paginationCount]);

        useEffect(() => {
            localStorage.setItem('vacancyFilters', JSON.stringify(filters));
        }, [filters]);

        function handleFilterChange(filters){
            setFilters(filters)
            setPaginationCount(5);
        }

        function handleClearFilters(){
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