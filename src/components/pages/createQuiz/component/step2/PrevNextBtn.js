import React from 'react';

function PrevNextBtn(props) {
  const { quizLength } = props;

  return (
    <div className="btn-type2">
      <button onClick={() => props.handleSubmit()}>이전(1/{quizLength})</button>
      <button onClick={() => props.handleSubmit()}>다음(1/{quizLength})</button>
    </div>
  );
}

export default PrevNextBtn;
