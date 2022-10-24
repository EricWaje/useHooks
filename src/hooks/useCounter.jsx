import React, { useState } from 'react';

const useCounter = (initialValue, max, min) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => count < max && setCount(count + 1);
    const decrement = () => count > min && setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
};

export default useCounter;
