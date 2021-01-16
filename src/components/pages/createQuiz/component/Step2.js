import React, { Component } from 'react';
import PrevNextBtn from "./step2/PrevNextBtn";
import QuestionInput from "./step2/QuestionInput";
import AnswerInputs from "./step2/AnswerInputs";
import QuestionNum from "./step2/QuestionNum";

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizCursor: 0,
      quizLength: this.props.quizLength || 0,
      quizQuestions: this.props.quizQuestions || [],
    };
  }

  cursorPrevQuestion() {
    const { quizCursor } = this.state;

    if(quizCursor < 1) {
      this.props.handleCancel();
    } else {
      this.setState({ quizCursor: quizCursor - 1 });
    }
  }

  cursorNextQuestion() {
    const { quizCursor, quizLength } = this.state;

    const isLast = this.moveToNextQuestion();

    if (isLast) {
      this.props.handleSubmit();
    }
  }

  moveToNextQuestion() {
    const { quizCursor, quizQuestions, quizLength } = this.state;
    const currentQuestion = quizQuestions[quizCursor];

    const isValid = this.isValidQuestion(currentQuestion);
    if(!isValid) {
      return;
    }

    const nextQuizCursor = quizCursor + 1;
    if (nextQuizCursor === quizLength) {
      return true;
    }

    this.setState({ quizCursor: nextQuizCursor });
  }

  isValidQuestion(question) {
    const invalidQuestion = question.displayText === '';
    if(invalidQuestion) {
      alert('질문을 입력해 주세요');
      return false;
    }

    const invalidAnswer = question.quizAnswers.find(answer => answer.displayText === '');
    if(invalidAnswer) {
      alert('선택지를 모두 입력해 주세요');
      return false;
    }

    return true;
  }

  setQuestionDisplayText(displayText) {
    const { quizCursor, quizQuestions } = this.state;
    quizQuestions[quizCursor].displayText = displayText;

    this.setState({ quizQuestions });
  }

  setAnswerDisplayText(displayOrder, displayText) {
    const { quizCursor, quizQuestions } = this.state;
    quizQuestions[quizCursor].quizAnswers
      .find(quizAnswer => quizAnswer.displayOrder === displayOrder)
      .displayText = displayText;

    this.setState({ quizQuestions });
  }

  setAnswerYn(displayOrder) {
    const { quizCursor, quizQuestions } = this.state;
    quizQuestions[quizCursor].quizAnswers
      .forEach(quizAnswer => {
        quizAnswer.answerYn = (quizAnswer.displayOrder === displayOrder) ? !quizAnswer.answerYn : false;
      });

    this.setState({ quizQuestions });
  }

  render() {
    const {quizLength, quizCursor, quizQuestions} = this.state;
    const quizQuestion = quizQuestions[quizCursor];

    return (
      <div className="create-quiz-step2">
        <QuestionNum quizCursor={quizCursor}
                     quizLength={quizLength} />
        <QuestionInput displayText={quizQuestion.displayText}
                       handleChange={this.setQuestionDisplayText.bind(this)} />
        <AnswerInputs quizAnswers={quizQuestion.quizAnswers}
                      handleClick={this.setAnswerYn.bind((this))}
                      handleChange={this.setAnswerDisplayText.bind(this)} />
        <PrevNextBtn handleClickPrev={this.cursorPrevQuestion.bind(this)}
                     handleClickNext={this.cursorNextQuestion.bind(this)}
                     quizLength={quizLength}
                     quizCursor={quizCursor} />
      </div>
    );
  }
}

export default Step2;
