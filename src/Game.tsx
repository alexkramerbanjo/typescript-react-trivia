import React, { useState } from "react";
import { GameProps } from "./interfaces";
import Results from "./Results";

const Game: React.FC<GameProps> = props => {
  const [index, setIndex] = useState(0);
  const initialPoints: number[] = [];
  const [points, setPoints] = useState(initialPoints);
  const [done, setDone] = useState(false);
  const handleClick = (bool: String) => {
    let newPoints = points.slice();
    if (props.questions && props.questions[index]) {
      if (bool === props.questions[index].correct_answer) {
        newPoints.push(1);
      } else {
        newPoints.push(0);
      }
    }
    setPoints(newPoints);
    const newIndex = index + 1;
    if (index < 10) {
      setIndex(newIndex);
    } else {
      setDone(true);
    }
  };
  if (done === true) {
    return (
      <Results
        questions={props.questions}
        points={points}
        setInGame={props.setInGame}
      ></Results>
    );
  } else if (!props.questions) {
    return <div>Loading...</div>;
  } else if (!props.questions[index]) {
    setDone(true);

    return <div>Loading...</div>;
  }
  return (
    <div className="Game">
      <div id="game-top-wrapper">
        <div id="game-top">{props.questions[index].category}</div>
      </div>
      <div className="question-index-wrapper">
        <div id="question-box">
          <div>{props.questions[index].question}</div>
        </div>
        <div id="index">{index + 1} of 10</div>
      </div>
      <div className="true-false-wrapper">
        <button id="true" onClick={() => handleClick("True")}>
          TRUE
        </button>
        <button id="false" onClick={() => handleClick("False")}>
          FALSE
        </button>
      </div>
    </div>
  );
};

export default Game;
