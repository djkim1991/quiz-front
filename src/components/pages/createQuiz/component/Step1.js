import React, { Component } from 'react';
import Title from "./step1/Title";
import QuestionCount from "./step1/QuestionCount";
import NextBtn from "./step1/NextBtn";

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizLength: props.quizLength,
    };
  }

  increaseQuizLength() {
    const { quizLength } = this.state;
    this.setState({ quizLength: quizLength + 1 });
  }

  decreaseQuizLength() {
    const { quizLength } = this.state;
    this.setState({quizLength: quizLength - 1});
  }

  render() {
    const { quizLength } = this.state;

    return (
      <div className="create-quiz-step1">
        <Title/>
        <QuestionCount quizLength={quizLength}
                       increaseQuizLength={this.increaseQuizLength.bind(this)}
                       decreaseQuizLength={this.decreaseQuizLength.bind(this)}/>
        <NextBtn handleSubmit={() => this.props.handleSubmit(quizLength)}/>
      </div>
    );
  }
}

export default Step1;
