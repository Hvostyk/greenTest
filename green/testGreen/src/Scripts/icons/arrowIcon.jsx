import style from '../../components/components styles/Vacancy.module.css'

export function ArrowIcon(){
    return(
        <svg 
            width="17" 
            height="16" 
            viewBox="0 0 17 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={style['arrowIcon']}
        >
            <path 
            clipRule="evenodd" 
            d="M4.14645 5.64645C4.34171 5.45118 4.65829 5.45118 4.85355 5.64645L8.5 9.29289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.85355 10.3536C8.65829 10.5488 8.34171 10.5488 8.14645 10.3536L4.14645 6.35355C3.95118 6.15829 3.95118 5.84171 4.14645 5.64645Z" 
            fill="#0D7AD9"
            />
        </svg>
    )
};