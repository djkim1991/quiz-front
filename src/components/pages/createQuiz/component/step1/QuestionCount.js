import React from 'react';
import LeftArrowIcon from "../../../../common/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../common/icons/RightArrowIcon";

function QuestionCount() {
  return (
    <div className="question-count">
      <LeftArrowIcon />
      <div className="count">3</div>
      <RightArrowIcon />
    </div>
  );
}

export default QuestionCount;
