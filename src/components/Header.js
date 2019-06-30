import React from "react";
// import Score from "./Score";

export default function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>Rock Paper Scissors</h1>
        <button onClick={props.handleReset} className="restart-btn">
          Restart Game
        </button>
        {/* <Score /> */}
      </header>
    </div>
  );
}
