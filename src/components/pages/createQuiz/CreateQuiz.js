import React, { Component } from 'react';
import './styles/createQuiz.css';
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      quizLength: 1,
    };
  }

  submitStep1(quizLength) {
    this.setState({ step: 2, quizLength });
  }

  submitStep2() {
    this.setState({ step: 3 });
  }

  render() {
    const { step, quizLength } = this.state;
    if (step === 1) {
      return <Step1 handleSubmit={this.submitStep1.bind(this)} />;
    } else if (step === 2) {
      return <Step2 quizLength={quizLength}
                    handleSubmit={this.submitStep2.bind(this)} />;
    }
  }
}

export default CreateQuiz;
