import React, {useState} from 'react';
import {Radar, Doughnut} from 'react-chartjs-2';
import { Spinner } from 'react-bootstrap';

import './chart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chart = () => {
    const [caunt, setCaunt] = useState(250)
    const [doughnut, setDoughnut] = useState({
            labels: ['Worcester', 'Free',],
            datasets:[
              {
                label:'Population',
                data:[
                  150,
                  360,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)'
                ]
              }
            ]
    });

    const [bar, setBar] = useState({
        labels: ['Running', 'Swimming', 'Eating', '13','11','12'],
        datasets: [{
            data: [20, 10, 4, 2]
        }],
        options: [{
            scale: {
                angleLines: {
                    display: false
                },
                ticks: {
                    suggestedMin: 15,
                    suggestedMax: 360
                }
            }
        }],
        backgroundColor:[
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)' 
            ]
          });

    return (
        <>
            <div className='pie chart-less' >
            <div className='r-boos-spinner'>
                <Spinner animation="grow" variant="primary"/>
            </div>
                <Doughnut 
                    data={doughnut}
                    options={{
                    title:{
                        display: true,
                        text:`Dislocation ${caunt}`,
                        fontSize: 20
                    },
                legend:{
                    display: true,
                    position: 'right'
                }
                }}/>
            </div>
            <div className='line chart-less'>
                <Radar
                    data={bar}
                    options={{
                        title:{
                            display: true,
                            text:'Largest Cities In ',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'right'
                        }
                    }}
                    />
            </div>
        </>
    )
}

export default Chart;