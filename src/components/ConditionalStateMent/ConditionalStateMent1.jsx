import React, { useState } from "react";
import { Button } from "react-bootstrap";
const ConditionalStateMent1 = () => {
  let [pshow, setPshow] = useState(false);
  return (
    <div>
      {pshow ? <p>Welcome to W3Schools</p> : ""}
      <Button className="m-4" onClick={() => setPshow(!pshow)}>
        {pshow ? "Hide" : "Show"}
      </Button>
    </div>
  );
};

export default ConditionalStateMent1;
