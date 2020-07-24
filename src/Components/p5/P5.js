import React, { Component } from 'react';
import ReactP5 from 'react-p5';

class P5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 150,
            y: 100
        };
    }

    setup = (p5, parent) => p5.createCanvas(500, 500).parent(parent);
    

    draw = p5 => {
        p5.background(0);
        p5.ellipse(this.state.x, this.state.y, 70, 70);
    }

    render() {
        return (
            <div>
                <ReactP5 setup={this.setup} draw={this.draw} />
            </div>
        );
    }
}

export default P5;