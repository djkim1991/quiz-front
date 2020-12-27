import React from 'react';
import AnswerInput from "./AnswerInput";

function AnswerInputs(props) {
  const answerNums = [1, 2, 3, 4];

  return (
    <div className="answer-inputs">
      {
        answerNums.map((answerNum, idx) => <AnswerInput key={idx} answerNum={answerNum} />)
      }
    </div>
  );
}

export default AnswerInputs;
