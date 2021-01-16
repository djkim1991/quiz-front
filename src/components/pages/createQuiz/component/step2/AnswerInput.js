import React from 'react';
import CheckboxIcon from "../../../../common/icons/CheckboxIcon";

function AnswerInput(props) {
  const { displayText, displayOrder, answerYn } = props.quizAnswer;
  const maxLength = 30;

  const handleChange = (e) => {
    const displayText = e.target.value.substr(0, maxLength);
    props.handleChange(displayOrder, displayText);
  };

  const handleClick = () => {
    console.log(displayOrder);
    props.handleClick(displayOrder);
  };

  return (
    <div className={`answer-input ${answerYn ? 'on' : ''}`}>
      <CheckboxIcon handleClick={handleClick} />
      <input type="text"
             value={displayText}
             onChange={handleChange}
             placeholder={`${displayOrder}번 보기를 입력해 주세요.`} />
    </div>
  );
}

export default AnswerInput;
