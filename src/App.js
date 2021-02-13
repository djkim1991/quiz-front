import React, { Component } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import QuizRouter from "./QuizRouter";

class App extends Component {
  componentDidMount() {
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
