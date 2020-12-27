import React from 'react';
import PrevNextBtn from "./step2/PrevNextBtn";
import QuestionInput from "./step2/QuestionInput";
import AnswerInputs from "./step2/AnswerInputs";

function Step2(props) {
  const { quizLength } = props;

  return (
    <div className="create-quiz-step2">
      <QuestionInput />
      <AnswerInputs />
      <PrevNextBtn quizLength={quizLength} />
    </div>
  );
}

export default Step2;
