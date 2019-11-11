import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Chart from './Chart'
import Charts from './Charts'


import 'bootstrap/dist/css/bootstrap.min.css';


const SendBoxChart = () => {
    return (
        <Tabs defaultActiveKey="Head" id="uncontrolled-tab-example">
            <Tab eventKey="Head" title="Head">
                <Chart />
            </Tab>
            <Tab eventKey="Down" title="Down">
                <Chart />
            </Tab>
            <Tab eventKey="Charts" title="Charts">
                <Charts />
            </Tab>
        </Tabs>
    )
}

export default SendBoxChart;