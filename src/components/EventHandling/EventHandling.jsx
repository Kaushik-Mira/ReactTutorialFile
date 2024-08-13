import { Button } from "react-bootstrap";
import React from "react";

const EventHandling = () => {
  let displayData = () => {
    alert("Hello World");
  };

  let addData = (a, b) => {
    console.log(a + b);
  };

  return (
    <div>
      <Button variant="primary" onClick={displayData} className="m-3">
        Click me!
      </Button>
      <Button variant="primary" onClick={() => addData(20, 25)}>
        Add data
      </Button>
    </div>
  );
};

export default EventHandling;
