import React from 'react';
import FloatBottomBtn from "../../../../common/button/FloatBottomBtn";

function NextBtn(props) {
  return (
    <FloatBottomBtn handleClick={props.handleSubmit} text="퀴즈 만들기 시작" />
  );
}

export default NextBtn;
