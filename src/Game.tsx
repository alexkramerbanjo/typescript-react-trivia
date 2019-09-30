import React from "react";
import { Question } from "./App";

export interface GameProps {
  questions?: Array<Question>;
  err?: boolean;
}

const Game: React.FC<GameProps> = props => {
  return (
    <div>
      Game Screen Here:{" "}
      {props.questions ? <div>{props.questions[0]}</div> : null}
    </div>
  );
};
export default Game;
