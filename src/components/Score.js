import React from "react";
import Player from "./Player";
import Computer from "./Computer";

export default function Score(props) {
  return (
    <div>
      <div className="score">
        <Player pScore={props.playerS} />
        <Computer cComputer={props.computerC} />
      </div>
    </div>
  );
}
