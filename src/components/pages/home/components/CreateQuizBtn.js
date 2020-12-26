import React from 'react';
import Link from "../../../common/navi/Link";

function CreateQuizBtn() {
  return (
    <div className="create-quiz-btn">
      <Link to="/createQuiz">
        퀴즈 만들기
      </Link>
    </div>
  );
}

export default CreateQuizBtn;
