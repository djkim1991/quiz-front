import React from 'react';
import LeftArrowIcon from "../../../../common/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../common/icons/RightArrowIcon";
import PlusCircleIcon from "../../../../common/icons/PlusCircleIcon";
import MinusCircleIcon from "../../../../common/icons/MinusCircleIcon";

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
      <MinusCircleIcon disabled={disabledDecrease}
                     handleClick={decreaseQuizLength} />
      <div className="count">
        <span>{quizLength}</span>
      </div>
      <PlusCircleIcon disabled={disabledIncrease}
                      handleClick={increaseQuizLength} />
    </div>
  );
}

export default QuestionCount;
