import React, { useState } from 'react';
import useList from '../hooks/useList';

const List = () => {
    const [textValue, setTextValue] = useState('');
    const { value, push, remove, isEmpty, sortedItems, reverse } = useList();

    const handleSubmit = (e) => {
        e.preventDefault();
        push(textValue);
        setTextValue('');
    };

    return (
        <div>
            List
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter text"
                    onChange={(e) => setTextValue(e.target.value)}
                    value={textValue}
                />
            </form>
            {isEmpty() ? (
                <h2>Aún no hay tareas</h2>
            ) : (
                <ul>
                    {value.map((tarea, idx) => (
                        <li key={idx}>
                            <input
                                type="checkbox"
                                onClick={() => remove(idx)}
                                defaultChecked={false}
                            />
                            {tarea}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;
