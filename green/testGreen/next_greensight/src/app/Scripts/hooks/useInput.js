import {useEffect, useState } from 'react';
import { useValidation } from './useValidation';

export function useInput (initialValue, validators, name , onChange){ //хук для взаимодействия с input и получения из них данных
    const [value, setValue] = useState(initialValue);
    const [isdirty, setDirty] = useState(false);
    const valid = useValidation(value, validators);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (onChange) {
            onChange(name, value);
        }
    }, [value]);

    const onBlur = () => {
        setDirty(true);
    };

    return {
        value,
        handleInputChange,
        isdirty,
        onBlur,
        ...valid
    };
};

