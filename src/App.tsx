import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Game from "./Game";
import { Question, GameResponse } from "./interfaces";

const App: React.FC = () => {
  const [inGame, setInGame] = useState(false);
  const [err, setErr] = useState(false);
  const [questions, setQuestions] = useState<Array<Question> | undefined>(
    undefined
  );
  const getQuestions = async () => {
    try {
      const res = await fetch("/api/questions");
      const data: GameResponse = await res.json();
      console.log(data);
      setQuestions(data.results);
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    if (inGame) getQuestions();
  }, [inGame]);
  return (
    <div className="App">
      {inGame === false ? (
        <HomeScreen setInGame={setInGame}></HomeScreen>
      ) : (
        <Game questions={questions} err={err} setInGame={setInGame}></Game>
      )}
    </div>
  );
};

export default App;
