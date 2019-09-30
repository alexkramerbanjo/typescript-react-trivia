import React from "react";

interface gameProps {
  setInGame: (bool: boolean) => void;
}

const HomeScreen: React.FC<gameProps> = props => {
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
