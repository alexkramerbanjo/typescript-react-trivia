import React from "react";
import { GameProps } from "./interfaces";

const HomeScreen: React.FC<GameProps> = props => {
  return (
    <div>
      <div>HomeScreen</div>
      <div onClick={() => props.setInGame(true)}>
        <h1>Start Game</h1>
      </div>
    </div>
  );
};

export default HomeScreen;
