import React from 'react';
import CheckboxIcon from "../../../../common/icons/CheckboxIcon";

function AnswerInput(props) {
  const answerNum = props.answerNum || 0;

  return (
    <div className="answer-input">
      <CheckboxIcon />
      <input type="text" placeholder={`${answerNum}번 보기를 입력해 주세요.`} />
    </div>
  );
}

export default AnswerInput;
