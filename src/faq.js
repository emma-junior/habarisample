import React, { useState } from "react";
import QandA from "./QandA";
import { useGlobalContext } from "./context";

const Faq = () => {
  const [activeId, setActiveId] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  // const [isClosed, setIsClosed] = useState(false)
  // const { isAnswer, setIsAnswer } = useGlobalContext();

  // const handledClick = (id) => {
  //   console.log(id, "id");
  //   setActiveId(id);
  // };
    
  
  return (
    <>
      <div>
        <h2 className="faq">FAQ</h2>
        <div className="underline"></div>
      </div>

      {QandA.map((questions) => {
        const { id, icon, icon1, question, answer } = questions;
        
        // console.log(id)
        return (
          <div className="contain" key={id}>
            <div className="que-btn">
              <h6 className="que">
                <b>{question}</b>
              </h6>
              {/* <button className="icon" onClick={(id) => setIsAnswer(!isAnswer)}>
                {isAnswer ? icon1 : icon}
              </button> */}
              {/* {console.log(id)}
              <button className="icon" onClick={() => setActiveId(id)}>
                {activeId === id ? icon1 : icon}
              </button> */}
              <button className="icon" onClick={() => {
                setActiveId(id)
                setIsOpen(!isOpen)
              }}>{activeId === id && isOpen ? icon1 : icon}</button>
              {/* <button className="icon" onClick={() => {
                setActiveId(id)
                setIsOpen(false)
              }}>{icon1}</button> */}
            </div> 
              {activeId === id && isOpen ? <p>{answer}</p> : "" }                         
          </div>
        );
      })}
    </>
  );
};

export default Faq;
