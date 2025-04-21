'use client'
import style from '../components styles/RequestForm.module.css';

export default function Errors({ validators, inputvalid, onChange }) {
    const errors = [];

    // Определение ошибок
    for (const item in validators) {
        switch (item) {
            case 'minLength':
                if (inputvalid.isdirty && inputvalid.lengthError) errors.push('lengthError');
                break;
            case 'isEmpty':
                if (inputvalid.isdirty && inputvalid.isEmpty) errors.push('emptyError');
                break;
            case 'maskError':
                if (inputvalid.isdirty && inputvalid.maskError) errors.push('maskError');
                break;
            case 'telError':
                if (inputvalid.isdirty && inputvalid.telError) errors.push('telError');
                break;
        }
    }

    return (
        <>
            {errors.map((error) => (
                <div key={error} className={style['Error']}>
                    {error === 'lengthError' && `Минимум ${validators.minLength} знака`}
                    {error === 'emptyError' && 'Пустое поле'}
                    {error === 'maskError' && 'Некорректный email'}
                    {error === 'telError' && 'Некорректный номер телефона'}
                </div>
            ))}
        </>
    );
}