import style from '../Styles/Footer.module.css'

export default function Footer(){
    return(
        <div className={style['Footer']}>
            <div className={style['Footer-contacts']}>
                <span>+7 499 391-66-69</span>
                <span>mail@greensight.ru</span>
            </div>

            <div className={style['Footer-adress']}>
                <span>+322A, 2nd Floor, Zelenograd, Moscow, Russia</span>
                <span>Directions</span>
            </div>
        </div>
    )
}