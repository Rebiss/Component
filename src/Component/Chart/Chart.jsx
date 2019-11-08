import React, {useState} from 'react';
import {Pie, Line, Bar } from 'react-chartjs-2';

import './chart.css'

const Chart = () => {
    const [chart, setChart] = useState({
            labels: ['Worcester', 'Free',],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)'
                ]
              }
            ]
    })

    return (
        <div className='pie-chart-less' >
            <Pie 
                data={chart}
                options={{
                title:{
                    display: true,
                    text:'Parking Count Car',
                    fontSize: 20
                },
            legend:{
                display: true,
                position: 'right'
            }
            }}/>
        </div>
    )
}

export default Chart;