import React from 'react';
import { NavBar } from './components/Navbar';
import { Man } from './components/Man';

// import {} from './components/Navbar';


export const Query = () => {
    return (
        <div>
            <h1> Info </h1>
            <NavBar>
            <div className='content'>
                <Man />
            </div>             
        </div>
    )
};