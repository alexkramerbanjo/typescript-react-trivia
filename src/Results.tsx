import React from "react";
import { ResultsProps } from "./interfaces";

const Results: React.FC<ResultsProps> = props => {
  function handleClick(): void {
    props.setInGame(false);
  }
  const totalScore: number = props.points.reduce((ac, cur) => ac + cur);
  console.log(props);
  return (
    <div id="results">
      You scored
      <br></br>
      {totalScore}/10
      {props.questions ? (
        <ul>
          {props.questions.map((q, index) => {
            let s;
            if (props.points[index] === 1) {
              s = "plus";
            } else {
              s = "minus";
            }
            return (
              <li key={index}>
                <div className={`plus-minus ${s}`}>{q.question}</div>
              </li>
            );
          })}
        </ul>
      ) : null}
      <button id="play-again" onClick={() => handleClick()}>
        Play Again?
      </button>
    </div>
  );
};

export default Results;
