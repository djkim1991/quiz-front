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
    const { quizCursor } = this.state;
    this.setState({ quizCursor: quizCursor + 1 });
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
