import React, { Component } from 'react';

class QuestionInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
    };

    this.maxLength = 50;
  }

  handleChange(e) {
    const question = e.target.value.substr(0, this.maxLength);
    this.setState({question});
  }

  render() {
    const { question } = this.state;

    return (
      <div className="question-input">
        <textarea placeholder="질문을 입력해 주세요."
                  value={question}
                  onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default QuestionInput;
