import React from "react";
import { GameProps } from "./interfaces";

const HomeScreen: React.FC<GameProps> = props => {
  return (
    <div className="Home">
      <div id="top">Welcome to the Trivia Challenge!</div>
      <div id="second">
        You Will be presented with 10 True or False questions
      </div>
      <div id="third">Can you score 100%?</div>
      <div id="bottom" onClick={() => props.setInGame(true)}>
        Begin
      </div>
    </div>
  );
};

export default HomeScreen;
