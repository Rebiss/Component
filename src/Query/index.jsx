import React, { useState } from 'react';
import { Nav } from './components/Navbar';
import { Men } from './components/Men';
import { Planets } from './components/Planets';

export const Query = () => {
    const [ page, setPage ] = useState('planets');
    return (
        <div>
            <h1> Info </h1>
            <Nav setPage={setPage}/>
            <div className='content'>
                { page === 'planets' ? <Planets /> : <Men /> }
            </div>             
        </div>
    )
}