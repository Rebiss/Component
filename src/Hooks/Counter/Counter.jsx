import React, { useState } from 'react';

export const Counter = () => {
    const [ count, setCount ] = useState(0);

    const countDec = () => setCount( prev => prev + 1 );
    const countInc = () => setCount( prev => prev - 1 );

    return (
        <div>
            <button onClick={countDec}> + </button>
            <h1> {count} </h1>
            <button onClick={countInc}> - </button>
        </div>
    )
}