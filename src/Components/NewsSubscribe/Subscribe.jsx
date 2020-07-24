import React, {useState, useEffect} from 'react';

import '../NewsSubscribe/Subscribe.css'
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

const Subscribe = () => {
    return (
        <div className='newsletter'>
            <h1>
                Mounthly
                <span>Newsletter</span>
            </h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi doloremque maxime mollitia explicabo aspernatur, harum officiis odit accusantium. Illo porro eius corporis minus eos ab sit doloremque deleniti. Fugit, praesentium.</p>

            <div className='txtb'>
                <input type="text" placeholder="example@mail.com"/>
                <button type='button'>
                    ->
                </button>
            </div>
        </div>
    )
}

export default Subscribe;