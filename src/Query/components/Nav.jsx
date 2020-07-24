import React from 'react'

export const Nav = (setPage) => {
    return (
        <nav>
            <button onClick={ () => setPage('planets') }> Planets </button>
            <button onClick={ () => console.log('Hello ') }> Man </button>
        </nav>
    )
}