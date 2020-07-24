import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Chart from './Chart'



import 'bootstrap/dist/css/bootstrap.min.css';


const SendBoxChart = () => {
    return (
        <Tabs defaultActiveKey="Head" id="uncontrolled-tab-example">
            <Tab eventKey="Head" title="Head">
                <Chart />
            </Tab>
            <Tab eventKey="Charts" title="Charts">
                <Chart />
            </Tab>
        </Tabs>
    )
}

export default SendBoxChart;