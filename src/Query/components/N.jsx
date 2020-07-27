import React from 'react';
import { arrayOf, string } from 'prop-types';


export const N = ({setPage}) => {
    console.log('setPage', setPage);
    return (
        <nav>
            <button onClick={ () => setPage('planets') }> Planets </button>
            <button onClick={ () => setPage('people') }> Man </button>
        </nav>
    )
}

N.propTypes = { setPage: arrayOf(string) }