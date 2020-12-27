import React  from 'react';

function QuestionInput(props) {
  const maxLength = 50;

  const handleChange = (e) => {
    const displayText = e.target.value.substr(0, maxLength);
    props.handleChange(displayText);
  }

  const { displayText } = props;

  return (
    <div className="question-input">
      <textarea placeholder="질문을 입력해 주세요."
                value={displayText}
                onChange={handleChange} />
    </div>
  );
}

export default QuestionInput;
