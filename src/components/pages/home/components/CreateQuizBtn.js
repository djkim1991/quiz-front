import React from 'react';
import FloatBottomBtn from "../../../common/button/FloatBottomBtn";

function CreateQuizBtn() {
  function handleClick() {
  }

  return (
    <div>
      <FloatBottomBtn  text="퀴즈 만들기" handleClick={handleClick} />
    </div>
  );
}

export default CreateQuizBtn;
