import { useState} from 'react';
import { EmailRegexp } from '../Scripts/constants/regexps';
import { telRegexp } from '../Scripts/constants/regexps';
import style from './components styles/RequestForm.module.css';
import Input from "./controls/Input";
export default function RequestForm({ title, subtitle }) {

    const [formData, setFormData] = useState({ //состояние для информации из формы
        name: '',
        email: '',
        phone: '',
        comment: ''
    });

    const handleSubmit = (e) => { //Вывод отклика в человекочитаемом виде
        e.preventDefault();
        
        const message = `
            Имя: ${formData.name}
            Email: ${formData.email}
            Телефон: ${formData.phone}
            Комментарий: ${formData.comment || 'Нет комментария'}
        `.replace(/^\s+/gm, '');

        alert(message);
    };

    const handleInputChange = (name, value) => { //Отлавливание изменения состояния input и запись в data
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className={style['RequestForm']}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <label htmlFor="name">Your name</label>
                        <li>
                            <Input 
                                name="name"
                                type={'text'} 
                                placeholder={'Please introduce yourself'} 
                                validators={{isEmpty:4,minLength:4}}
                                onChange={handleInputChange}
                            />
                        </li>
                        
                        <label htmlFor="email">Email</label>
                        <li>
                            <Input 
                                name="email"
                                type={'email'} 
                                placeholder={'ivanov@gmail.com'} 
                                validators={{isEmpty:4,maskError:EmailRegexp}}
                                onChange={handleInputChange}
                            />
                        </li>
                        
                        <label htmlFor="phone">Phone number</label>
                        <li>
                            <Input 
                                name="phone"
                                type={'tel'} 
                                placeholder={'+7 (999) 000 00 00'} 
                                validators={{isEmpty:4,telError:telRegexp}}
                                onChange={handleInputChange}
                            />
                        </li>
                        
                        <label htmlFor="comment">Comment</label>
                        <li>
                            <textarea 
                                className={style["requestFotm-textarea"]}
                                id="comment" 
                                name="comment" 
                                rows="5" 
                                cols="33" 
                                placeholder='Message text'
                                value={formData.comment}
                                onChange={(e) => handleInputChange('comment', e.target.value)}
                            />
                        </li>
                    </ul>

                    <button type="submit" >Send</button>
                    <div className={style['personalData']}>
                        <span>By clicking "Send" you confirm your consent to the</span>
                        <span style={{color:'#0D7AD9', margin:'0'}}>processing of personal data</span>
                    </div>
                </form>
            </div>
        </>
    )
}