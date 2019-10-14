import React, { Fragment, Component } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

import "./ButtonGroup.css";

class SendboxButtonGroup extends Component {
  state = {
    switchOn: true
  };

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  };

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  };

  render() {
    const { switchOn } = this.state;
    return (
      <Fragment>
        <h2>1. Horizontal button group </h2>
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2>1. Vertical button group </h2>
        <ButtonGroup>
          <Button>First</Button>
          <Button active>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2>3. On/Off Switched button group</h2>
        <ButtonGroup>
          <Button onClick={this.handleSwitchOn} active={switchOn}>
            On
          </Button>
          <Button onClick={this.handleSwitchOff} active={switchOn}>
            Middle
          </Button>
        </ButtonGroup>
      </Fragment>
    );
  }
}

export default SendboxButtonGroup;
