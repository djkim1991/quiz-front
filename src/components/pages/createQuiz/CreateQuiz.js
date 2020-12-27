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
      quizQuestions: [],
    };
  }

  renderStep1() {
    this.setState({ step: 1 });
  }

  renderStep2(quizLength) {
    const quizQuestions = Array.from({ length: quizLength }, (_, idx) => ({
      displayText: '',
      displayOrder: (idx+1),
      quizAnswers: [
        { displayText: '', displayOrder: 1, answerYn: false },
        { displayText: '', displayOrder: 2, answerYn: false },
        { displayText: '', displayOrder: 3, answerYn: false },
        { displayText: '', displayOrder: 4, answerYn: false },
      ]
    }));

    this.setState({ step: 2, quizLength, quizQuestions });
  }

  renderStep3() {
    this.setState({ step: 3 });
  }

  render() {
    const { step, quizLength, quizQuestions } = this.state;
    if (step === 1) {
      return <Step1 quizLength={quizLength}
                    handleSubmit={this.renderStep2.bind(this)} />;
    } else if (step === 2) {
      return <Step2 quizLength={quizLength}
                    quizQuestions={quizQuestions}
                    handleCancel={this.renderStep1.bind(this)}
                    handleSubmit={this.renderStep3.bind(this)} />;
    }
  }
}

export default CreateQuiz;
