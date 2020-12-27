import React, { Component } from 'react';
import './styles/createQuiz.css';
import Step1 from "./component/Step1";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }
  render() {
    const { step } = this.state;
    if (step === 1) {
      return <Step1 />;
    }
  }
}

export default CreateQuiz;
