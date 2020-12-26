import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import CreateQuiz from "./components/pages/createQuiz/CreateQuiz";
import StartQuiz from "./components/pages/startQuiz/StartQuiz";
import PageNorFound from "./components/errors/PageNotFound";

function QuizRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/createQuiz" component={CreateQuiz} />
      <Route path="/startQuiz" component={StartQuiz} />
      <Route path="/" component={PageNorFound} />
    </Switch>
  );
}

export default QuizRouter;
