import React, { useState } from "react";
import { GameProps } from "./interfaces";
import Results from "./Results";

const Game: React.FC<GameProps> = props => {
  console.log(props);
  const [index, setIndex] = useState(0);
  const initialPoints: number[] = [];
  const [points, setPoints] = useState(initialPoints);
  const [done, setDone] = useState(false);
  const handleClick = (bool: String) => {
    let newPoints = points;
    if (
      props.questions &&
      props.questions[index] &&
      bool === props.questions[index].correct_answer
    ) {
      newPoints.push(1);
    } else {
      newPoints.push(0);
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
    <div>
      <div>{props.questions[index].question}</div>
      <div>
        <div id="true" onClick={() => handleClick("true")}>
          TRUE
        </div>
        <div id="false" onClick={() => handleClick("false")}>
          FALSE
        </div>
      </div>
    </div>
  );
};

export default Game;
