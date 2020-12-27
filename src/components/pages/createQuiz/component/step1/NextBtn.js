import React from 'react';

function NextBtn(props) {
  return (
    <div className="btn-type1">
      <button onClick={() => props.handleSubmit()}>퀴즈 만들기 시작</button>
    </div>
  );
}

export default NextBtn;
