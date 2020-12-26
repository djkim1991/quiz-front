import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import QuizRouter from "./QuizRouter";

function App() {
  return (
    <BrowserRouter>
      <QuizRouter />
    </BrowserRouter>
  );
}

export default App;
