import React, { Fragment, useState } from 'react';
import Picker from 'react-giphy-picker';

const Giphy = () => {
    const [state, setState] = useState('')
    const handleLog = (gif) => {
        console.log(gif.downsized.url);
        setState(gif.downsized.url);
    };

    return (
        <Fragment>
            <Picker onSelected={handleLog} />
            <h1 style={{marginTop: '15px'}}>{state}</h1>
        </Fragment>
    )
};


export default Giphy;
