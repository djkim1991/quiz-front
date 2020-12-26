import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import CreateQuiz from "./components/pages/createQuiz/CreateQuiz";
import StartQuiz from "./components/pages/startQuiz/StartQuiz";
import PageNorFound from "./components/errors/PageNotFound";
import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";

function QuizRouter() {
  return (
    <div className="layout">
      <Gnb />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createQuiz" component={CreateQuiz} />
          <Route path="/startQuiz" component={StartQuiz} />
          <Route path="/" component={PageNorFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default QuizRouter;
