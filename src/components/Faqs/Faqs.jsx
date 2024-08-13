import React, { useState } from "react";
import "./Faqs.css";
import { question } from "../Data/QuestionData/QuestionData";

const Faqs = () => {
    let [currentId, setCurrentId] = useState(question[0].id)
    let items = question.map((itemsData, i) => {

        let itemsDetails = {
            itemsData,
            currentId,
            setCurrentId


            
        }
        return (
            <FaqItems key={i} itemsDetails={itemsDetails}/>
        )
    })
  return (
    <>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">
       {items}
      </div>
    </>
  );
};

export default Faqs;

function FaqItems({itemsDetails}) {
    let {itemsData, currentId, setCurrentId} = itemsDetails;
  return (
    <div className="faqItems">
      <h2 onClick={() => setCurrentId(itemsData.id)}>{itemsData.question}</h2>
      <p className={currentId === itemsData.id ? 'activeAns' : ''}>{itemsDetails.itemsData.answer}</p>
    </div>
  );
}
