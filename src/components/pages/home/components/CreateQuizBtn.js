import React from 'react';
import FloatBottomBtn from "../../../common/button/FloatBottomBtn";
require('../../../../external/kakao/kakao.min.js');

function CreateQuizBtn() {
  function handleClick() {
    const kakaoAccessToken = window.Kakao.Auth.getAccessToken();
    console.log(kakaoAccessToken);

    window.Kakao.Auth.login({
      success() {
        alert('로그인 성공');
        window.location.pathname = "/createQuiz";
      },
      fail(e) {
        console.log(e);
      }
    });
  }

  return (
    <div>
      <FloatBottomBtn  text="퀴즈 만들기" handleClick={handleClick} />
    </div>
  );
}

export default CreateQuizBtn;
