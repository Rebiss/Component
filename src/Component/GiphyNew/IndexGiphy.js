import React from 'react';
import ReactGiphySearchbox from 'react-giphy-searchbox'

const API_KEY = 't0WziV5gGejyE99IJyPa0oZmrFVS7iJr'

const IndexGiphy = () => {
    return (
        <>
            <ReactGiphySearchbox
                apiKey="API_KEY"
                onSelect={item => console.log(item)}
            />
        </>
    )
}

export default IndexGiphy;