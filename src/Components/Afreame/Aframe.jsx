import React from 'react';
import 'aframe';
// import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';



const Aframe = () => {
    return (
        <Scene>
            <Entity primitive='a-sky' src="sechelt.jpg"/>
            <Entity geometry={{primitive: 'sphere', width: 5, height: 2}} material={{color: '#a3aaae'}} position={{x: -5, y: 3, z: -10}}/>
            <Entity particle-system={{preset: 'snow'}}/>
            <Entity light={{type: 'point'}}/>
            <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
            <Entity text={{value: 'Selena'}}/>
        </Scene>
    )
}


export default Aframe;