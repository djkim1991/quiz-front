import React from 'react';
import LeftArrowIcon from "../../../../common/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../common/icons/RightArrowIcon";

function QuestionCount(props) {
  const quizLength = props.quizLength;
  const minQuizLength = 1;
  const maxQuizLength = 5;
  const disabledDecrease = quizLength <= minQuizLength;
  const disabledIncrease = quizLength >= maxQuizLength;

  const decreaseQuizLength = () => {
    if(!disabledDecrease) {
      props.decreaseQuizLength();
    }
  };

  const increaseQuizLength = () => {
    if(!disabledIncrease) {
      props.increaseQuizLength();
    }
  };

  return (
    <div className="question-count">
      <LeftArrowIcon disabled={disabledDecrease}
                     handleClick={decreaseQuizLength} />
      <div className="count">
        <span>{quizLength}</span>
      </div>
      <RightArrowIcon disabled={disabledIncrease}
                      handleClick={increaseQuizLength} />
    </div>
  );
}

export default QuestionCount;
