import React, { useState } from "react";
import redicon from "../assets/read icon.png";
import redicon1 from "../assets/read icon (1).png";
import "./service.css";

const data = [
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
    {
        ques:"What is Team Newsify?" , 
      ans:"It is alomost completely automated as a system . You can schedule plan and create calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create a smooth business plan for your and your teamateswith one click!"
    },
  ]

function FrequentQuestion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="freqwrap">
      <div className="freqcont">
        <div className="frqtop">
          <h2>Frequently Asked Questions</h2>
          <p>We're happy to answer your questions</p>
        </div>

        <div className="questions">
          {data.map((d, i) => (
            <div key={i} className="singques">
              <div className="queitonaprt" onClick={() => toggleAnswer(i)}>
                <p>{d.ques}</p>
                <img
                  src={activeIndex === i ? redicon1 : redicon}
                  alt="Toggle Icon"
                />
              </div>

              <div
                className={`anspart ${activeIndex === i ? "active" : ""}`}
              >
                <p>{d.ans}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="loadmorebtn"><span>Load more FAQs</span></button>
      </div>
    </div>
  );
}

export default FrequentQuestion;



