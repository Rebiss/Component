import React, { useState, Fragment } from "react";
import TabsOne from "./TabsOne";
import TabsTwo from "./TabsTwo";

const SendboxTab = () => {
  const [isOpen, setIsOPen] = useState(true);

  return (
    <Fragment>
      <button onClick={() => setIsOPen(!isOpen)}>
        {isOpen ? "Static Log" : "ElasticSearch Log(<-)"}
      </button>
      <div>{isOpen ? <TabsOne /> : <TabsTwo />}</div>
    </Fragment>
  );
};

export default SendboxTab;
