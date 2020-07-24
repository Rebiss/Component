import React, { Fragment } from "react";
import Button from "./Button";

const Sendbox = () => {
  return (
    <Fragment>
      <h2>
        <span>1. Text and onClick function: </span>
      </h2>
      <Button onClick={() => console.log("Hell")}> Button </Button>
      <h2>
        <span>2. Disable Button : </span>
      </h2>
      <Button onClick={() => console.log("Disable")} disabled>
        Button
      </Button>
      <h2>
        <span>3. Active Button: </span>
      </h2>
      <Button active />
      <h2>
        <span>4. Text and onClick function: </span>
      </h2>
      <Button data-name="button" />
      <Button type="submit" />
      <h2>
        <span>5. Text and onClick function: </span>
      </h2>
      <Button href="test"> Link </Button>
      <Button href="test" disabled>
        Link Disabled
      </Button>
    </Fragment>
  );
};

export default Sendbox;
