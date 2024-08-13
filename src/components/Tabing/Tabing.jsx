import React, { useState } from "react";
import "./Tabing.css";
import { tabs } from "../Data/TabingData/TabingData";

const Tabing = () => {
  let [activeTabs, setactiveTabs] = useState(0);
  let [activeContent, setactiveContent] = useState(tabs[0]);

  let changeData = (index) => {
    setactiveTabs(index);
    setactiveContent(tabs[index]);
  }
  return (
    <div className="tabsOuter">
      <h1>Law Prep Vision Mission and Values</h1>
      <ul>
        {tabs.map((tabItems, index) => {
          return (
            <li>
              <button onClick={() => changeData(index)} className={activeTabs === index ? 'activeButton' : ''}>{tabItems.title}</button>
            </li>
          );
        })}
      </ul>
      {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
    </div>
  );
};

export default Tabing;
