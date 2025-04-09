import { useState, useEffect } from 'react';
import style from '../Styles/Vacancies.module.css'
import Vacancy from './Vacancy';

function vacanciesContainer(vacancies){ //контейнер вакансий
    return (vacancies.map((item)=>(
        <Vacancy vacancy={item}/>
    ))
    )
    
}

export default function Vacancies({filters, paginationCount, setPaginationCount }){

      useEffect(() => {
        localStorage.setItem('vacanciesCount', paginationCount.toString());
      }, [paginationCount]);

      const [vacancies,setVacancies]=useState([])

    useEffect(()=>{

      const fetchData = async () => {
        const url = new URL('https://api.hh.ru/vacancies');
        url.searchParams.set('per_page', 21);
        
        if(filters.Form === 'Part time') {
            url.searchParams.set('employment', 'part');
        } else {
            url.searchParams.set('employment', 'full');
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            setVacancies(data.items || []);
        } catch (error) {
            console.error('Ошибка:', error);
            setVacancies([])
        }
    };
    
    fetchData();
    },[filters])

    const newVacancies=()=>{ //отображение новых вакансий на сайте
      if((paginationCount+5)>vacancies.length){
        setPaginationCount(vacancies.length)
        setAllVacancies(true)
      }
      else{
        setPaginationCount((i)=>i+5)
      }
    }

    return(
        <div className={style['Vacancies']}>
          {vacanciesContainer(vacancies.slice(0,paginationCount))}
          <button className={style['newVacancies']} onClick={newVacancies} disabled={(paginationCount===vacancies.length)? true:false}>Show more</button>
        </div>
    )
}
