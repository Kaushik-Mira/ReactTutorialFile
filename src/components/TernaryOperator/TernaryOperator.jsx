import React from "react";

function TernaryOperator(props) {
  let status = true;
  return (
    <div>{status ? <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Hello {props.name}</h1> : " "}</div>
  )
}

export default TernaryOperator;
 