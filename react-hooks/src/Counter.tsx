import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;