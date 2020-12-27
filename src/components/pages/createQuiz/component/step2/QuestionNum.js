import React from 'react';

function QuestionNum(props) {
  const { quizCursor, quizLength } = props;

  return (
    <div className="question-num">
      <span>{(quizCursor+1)}/{quizLength}</span>
    </div>
  );
}

export default QuestionNum;
