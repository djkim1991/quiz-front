import React, { Component } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import QuizRouter from "./QuizRouter";

class App extends Component {
  componentDidMount() {
    window.Kakao.init("20de6ffbd12f76b6f1a92d3ba51c2e9a");
  }

  render() {
    return (
      <BrowserRouter>
        <QuizRouter/>
      </BrowserRouter>
    );
  }
}

export default App;
