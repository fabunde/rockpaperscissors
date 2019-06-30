import React from "react";

export default function Modal(props) {
  let computerChoice = props.computerChoice;
  let winText = `${props.winner} wins`;
  return (
    <div className="modal">
      <div id="result" className="modal-content">
        <div id="modalclose">x</div>
        <h1 className="text-win">
          {props.winner === "Draw" ? props.winner : winText}
        </h1>
        <i className={`choice fas fa-hand-${computerChoice} fa-10x`} />
        <p>Computer chose {props.computerChoice}</p>
        <p>
          And you chose <b> {props.playerChoice}</b>
        </p>
      </div>
    </div>
  );
}
