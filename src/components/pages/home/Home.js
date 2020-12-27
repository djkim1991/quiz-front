import React from 'react';
import Logo from "./components/Logo";
import CreateQuizBtn from "./components/CreateQuizBtn";
import './styles/home.css';

function Home() {
  return (
    <div className="home">
      <Logo />
      <CreateQuizBtn />
    </div>
  );
}

export default Home;
