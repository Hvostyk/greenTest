import { useState } from 'react';
import style from '../Styles/Vacancy.module.css'
import { Section } from '../../node_modules/@greensight/gds/src/components/emotion/Section'
import classNames from 'classnames/bind';
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

    const ArrowIcon = () => (
        <svg 
            width="17" 
            height="16" 
            viewBox="0 0 17 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={style['arrowIcon']}
        >
            <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M4.14645 5.64645C4.34171 5.45118 4.65829 5.45118 4.85355 5.64645L8.5 9.29289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.85355 10.3536C8.65829 10.5488 8.34171 10.5488 8.14645 10.3536L4.14645 6.35355C3.95118 6.15829 3.95118 5.84171 4.14645 5.64645Z" 
            fill="#0D7AD9"
            />
        </svg>
        );

    return(
        <Section>
        <div className={Vacancy}>
            <div className={style['title-container']}>
                <h1 className={style['title-container_title']}>{vacancy.name}</h1>

                <div className={style['title-container_company']}><img src='../../public/images/solo.svg'/></div>

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
                <li>{vacancy.snippet.requirement || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eveniet tenetur repellat.'}</li>
                <li>{vacancy.snippet.responsibility || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eveniet tenetur repellat.'}</li>
            </ul>
            </div>

            <div className={details}> 
                <span onClick={togglefunc} >{isactive ? 'Less details' : 'More details'} </span>
                <ArrowIcon/>
            </div>
        </div>
        </Section>
    )
}