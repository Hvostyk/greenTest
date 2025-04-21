import { useState } from 'react';
import style from './components styles/Vacancy.module.css'
import Image from 'next/image';
import classNames from 'classnames/bind';
import { ArrowIcon } from '../Scripts/icons/arrowIcon';
const cx=classNames.bind(style);

export default function Vacancy({vacancy}){
    const [isactive,setActivity]=useState(false);

    const Vacancy=cx({
        'Vacancy':true,
        'active':isactive,
    })

    const details=cx({
        'moreDetails':true,
        'lessDetails':isactive,
    })
    

    const togglefunc=()=>{
        if(isactive){
            setActivity(false);
        }
        else{
            setActivity(true);
        }
    }

    return(
        <>
        <div className={Vacancy}>
            <div className={style['title-container']}>
                <h1 className={style['title-container_title']}>{vacancy.name}</h1>

                <div className={style['title-container_company']}><Image src='/images/solo.svg' width={160} height={40} alt='Vacancy'/></div>

                <button className={style['title-container_respond']}>Respond</button>
            </div>

            <div className={style['shortInfo-container']}>

                <div className={style['shortInfo-block']}>
                    <span>Form</span>
                    <span>{vacancy.employment.name}</span>
                </div>

                <div className={style['shortInfo-block']}>
                    <span>Company</span>
                    <span>{vacancy.employer.name}</span>
                </div>

                <div className={style['shortInfo-block']}>
                    <span>Web</span>
                    <span>{vacancy.alternate_url}</span>
                </div>

                <div className={style['shortInfo-block']}>
                    <span>Adress</span>
                    <span>{vacancy.id}</span>
                </div>
            </div>

            <div className={style['info-container']}>
            Ищем опытного Frontend-разработчика для создания современных веб-интерфейсов HR-платформы на React и TypeScript. Идеальный кандидат умеет работать в Agile-команде и писать качественный, производительный код.
            </div>

            <div className={style['snapshot-container']}>
            Success Snapshot: <br/>
            <ul>
                <li>{vacancy.snippet.requirement || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eveniet tenetur repellat.' }</li>
                <li>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eveniet tenetur repellat.'}</li>
                <li>{vacancy.snippet.responsibility || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eveniet tenetur repellat.'}</li>
            </ul>
            </div>

            <div className={details}> 
                <span onClick={togglefunc} >{isactive ? 'Less details' : 'More details'} </span>
                <ArrowIcon/>
            </div>
        </div>
        </>
    )
}