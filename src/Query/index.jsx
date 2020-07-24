import React, { useState } from 'react';
import { NavBar } from './components/Navbar';
import { Men } from './components/Men';
import { Planets } from './components/Planets';

// import {} from './components/Navbar';


export const Query = () => {
    const [ page, setPage ] = useState('planets');
    return (
        <div>
            <h1> Info </h1>
            <NavBar />
            <div className='content'>
                { page === 'planets' ? <Planets /> : <Men /> }
            </div>             
        </div>
    )
}