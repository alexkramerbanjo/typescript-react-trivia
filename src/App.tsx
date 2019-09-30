import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Game from "./Game";

interface GameResponse {
  response_code: number;
  response: Array<Question>;
}

// interface GameState {
//   questions?: Array<Question>;
//   index?: number;
//   completed?: boolean;
//   totalScore?: number;
// }

// const initialGameState = {
//   questions: null,
//   index: null,
//   completed: null,
//   totalScore: null
// };

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

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
      setQuestions(data.response);
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    getQuestions();
  });
  return (
    <div className="App">
      {inGame === false ? (
        <HomeScreen setInGame={setInGame}></HomeScreen>
      ) : (
        <Game questions={questions} err={err}></Game>
      )}
    </div>
  );
};

export default App;
