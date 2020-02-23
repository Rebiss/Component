import React, {useState} from 'react';
import ReactGiphySearchbox from 'react-giphy-searchbox'

const API_KEY = 't0WziV5gGejyE99IJyPa0oZmrFVS7iJr';

const IndexGiphy = () => {
    const [url, setUrl] = useState('');
    const onSelect = (event) => {
        setUrl(event.url)
        console.log( typeof event.url)
    }
    return (
        <>
            <ReactGiphySearchbox
                apiKey="t0WziV5gGejyE99IJyPa0oZmrFVS7iJr"
                onSelect={onSelect}
            />

            <div style={{marginTop:'2%', width: '350px'}}>
                <img src={url} />
                <img src="https://giphy.com/gifs/cool-kristen-stewart-5Lh8W03qPLD0I" alt=""/>
            </div>
        </>
    )
}

export default IndexGiphy;