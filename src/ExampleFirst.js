import React from "react";

const ExampleFirst = () => {
  let name = "Kaushik";
  let l = [10, 20, 30, 40, 50];
  let obj = {
    name: "Kaushik",
    age: 20,
    isTrue: true,
  }
  
  return (
   
    <div>
      <h1>{name}</h1>
      {l.map((value) => {
        return (
          <div>{value}</div>
        );
      })}
      <h2>{obj.name}</h2>
    </div>
  );
};

export default ExampleFirst;


