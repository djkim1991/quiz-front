import React from 'react';
import AnswerInput from "./AnswerInput";

function AnswerInputs(props) {
  const { quizAnswers } = props;

  return (
    <div className="answer-inputs">
      {
        quizAnswers.map((quizAnswer, idx) =>
          <AnswerInput key={idx}
                       quizAnswer={quizAnswer}
                       handleChange={props.handleChange} />)
      }
    </div>
  );
}

export default AnswerInputs;
