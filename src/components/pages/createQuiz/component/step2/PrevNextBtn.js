import React from 'react';

function PrevNextBtn(props) {

  return (
    <div className="btn-type2">
      <button onClick={() => props.handleClickPrev()}>이 전</button>
      <button onClick={() => props.handleClickNext()}>다 음</button>
    </div>
  );
}

export default PrevNextBtn;
