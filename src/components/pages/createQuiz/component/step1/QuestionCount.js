import React, { Component } from 'react';
import LeftArrowIcon from "../../../../common/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../common/icons/RightArrowIcon";

class QuestionCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizCount: 1,
    };

    this.minQuizCount = 1;
    this.maxQuizCount = 5;
  }

  increaseCount() {
    const { quizCount } = this.state;
    if (quizCount < this.maxQuizCount) {
      this.setState({ quizCount: quizCount + 1 });
    }
  }

  decreaseCount() {
    const { quizCount } = this.state;
    if (quizCount > this.minQuizCount) {
      this.setState({quizCount: quizCount - 1});
    }
  }

  render() {
    const { quizCount } = this.state;

    return (
      <div className="question-count">
        <LeftArrowIcon disabled={quizCount <= this.minQuizCount}
                       handleClick={this.decreaseCount.bind(this)} />
        <div className="count"><span>{quizCount}</span></div>
        <RightArrowIcon disabled={quizCount >= this.maxQuizCount}
                        handleClick={this.increaseCount.bind(this)} />
      </div>
    );
  }
}

export default QuestionCount;
