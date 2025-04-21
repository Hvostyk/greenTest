import { useState, useEffect, useRef } from 'react';
import style from './components styles/Vacancies.module.css'
import Vacancy from './Vacancy';
import {vacanciesData } from '../api/VacanciesData.js'

function vacanciesContainer(vacancies){ //контейнер вакансий
    return (vacancies.map((item)=>(
        <Vacancy key={item.id} vacancy={item}/>
    ))
    )
}

export default function Vacancies({filters, paginationCount, setPaginationCount }){

      const [vacancies,setVacancies]=useState([])
      const addMoreBut=useRef(null)

      useEffect(() => {
        localStorage.setItem('vacanciesCount', paginationCount.toString());
      }, [paginationCount]);


      useEffect(()=>{
      addMoreBut.current.disabled=true

      vacanciesData(filters).then((data)=>{
        setVacancies(data);
        if (vacancies != []){
          addMoreBut.current.disabled=false;
        }
      })
      },[filters])

      const newVacancies=()=>{ //отображение новых вакансий на сайте
        if((paginationCount+5)>vacancies.length){
          setPaginationCount(vacancies.length)
          addMoreBut.current.disabled=true
        }
        else{
          setPaginationCount((i)=>i+5)
        }
      }

      return(
          <div className={style['Vacancies']}>
            {vacanciesContainer(vacancies.slice(0,paginationCount))}
            <button ref={addMoreBut} className={style['newVacancies']} onClick={newVacancies}>Show more</button>
          </div>
      )
}
