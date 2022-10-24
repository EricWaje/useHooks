import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(5, 10, 1);

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={increment}>+</button>
                <h2>{count}</h2>
                <button onClick={decrement}>-</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
