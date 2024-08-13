import React, { useState } from "react";
import "./FaqUsingState.css";
import { questios } from "../question";

const FaqUsingState = () => {
    let [showAns, setShowAns] = useState(questios[0].id);
  return (
    <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">
        {questios.map((faqItems, i) => {
          return (
            <>
              <div className="faqItems">
                <h2 onClick={() =>  setShowAns(faqItems.id)}>{faqItems.question}</h2>
                <p className={showAns === faqItems.id ? 'activeAns' : ''}>
                 {faqItems.answer}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FaqUsingState;
