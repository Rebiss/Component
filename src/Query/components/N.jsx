import React from 'react'

export const N = (setPage) => {
    console.log('setPage', setPage);
    const onFuncClick = () => {
        setPage('planets')
    }
    return (
        <nav>
            <button onClick={ onFuncClick }> Planets </button>
            <button onClick={ () => console.log('Hello ') }> Man </button>
        </nav>
    )
}