import { useState } from 'react';

const useList = () => {
    const [value, setValue] = useState([]);

    const push = (element) => setValue((oldValue) => [...oldValue, element]);
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    const clear = () => setValue([]);

    const isEmpty = () => value.length === 0;

    const sortedItems = () => setValue((oldValue) => oldValue.sort());

    const reverse = () => setValue((oldValue) => oldValue.reverse());

    return { value, push, remove, isEmpty, clear, sortedItems, reverse };
};

export default useList;
