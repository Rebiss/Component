import React, { useState } from 'react';
import { N } from './components/N';
import { P } from './components/P';
import { M } from './components/M';


export const Query = () => {
    const [ page, setPage ] = useState('planets');
    console.log('*****', setPage)
    return (
        <div>
            <h1> Info </h1>
            <N setPage={setPage}/>
            <div className='content'>
                { page === 'planets' ? <P /> : <M /> }
            </div>             
        </div>
    )
}