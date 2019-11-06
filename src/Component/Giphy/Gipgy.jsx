import React, {Fragment, useState} from 'react';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';

const Giphy = () => {
    const [state, setState] = useState('');

    const regex = /\b(?:(http|https)|media|com|giphy|gif)\b/gi;
    const words = state.match(regex);
    const test = regex.test(state);
    if (words && words.length) {
        console.log('************', words.length, words ,test );
    }

    const onEntrySelect = entry => {
        setState( `https://media.giphy.com/media/${entry.id}/giphy.gif`); 
    }

    return (
        <Fragment>
            <GiphySelect onEntrySelect={onEntrySelect}/>
            <h1>{state}</h1>
            {state && (<div>
                <img src={state} alt="alter"/>
            </div>)
        }
        </Fragment>
    )
}

export default Giphy;