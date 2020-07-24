import React, { Fragment } from 'react';
import { Graph } from "react-d3-graph";

const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};

const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};
 
const onClickGraph = function() {
    console.log(`Clicked the graph background`);
};
 
const onClickNode = function(nodeId) {
    console.log(`Clicked node ${nodeId}`);
};
 
const onRightClickNode = function(event, nodeId) {
    console.log(`Right clicked node ${nodeId}`);
};
 
const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
};
 
const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
};
 
const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
};
 
const onRightClickLink = function(event, source, target) {
    console.log(`Right clicked link between ${source} and ${target}`);
};
 
const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
};
 
const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
};
 
const onNodePositionChange = function(nodeId, x, y) {
    console.log(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
};

const Graph_D3 = () => {
    return (
            <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={data}
                config={myConfig}
                onClickNode={onClickNode}
                onRightClickNode={onRightClickNode}
                onClickGraph={onClickGraph}
                onClickLink={onClickLink}
                onRightClickLink={onRightClickLink}
                onMouseOverNode={onMouseOverNode}
                onMouseOutNode={onMouseOutNode}
                onMouseOverLink={onMouseOverLink}
                onMouseOutLink={onMouseOutLink}
                onNodePositionChange={onNodePositionChange}
            />
    )
}


export default Graph_D3;