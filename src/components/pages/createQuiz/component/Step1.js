import React from 'react';
import Title from "./step1/Title";
import QuestionCount from "./step1/QuestionCount";
import NextBtn from "./step1/NextBtn";

function Step1() {
  return (
    <div className="create-quiz-step1">
      <Title />
      <QuestionCount />
      <NextBtn />
    </div>
  );
}

export default Step1;
