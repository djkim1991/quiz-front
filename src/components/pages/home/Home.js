import React from 'react';
import Logo from "./components/Logo";

import './styles/home.css';
import CreateQuizBtn from "./components/CreateQuizBtn";

function Home() {
  return (
    <div className="home">
      <Logo />
      <CreateQuizBtn />
    </div>
  );
}

export default Home;
