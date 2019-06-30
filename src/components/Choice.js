import React from "react";

export default function Choice(props) {
  return (
    <div
      onClick={props.selectedChoice}
      className={`choice fas fa-hand-${props.ctype} fa-10x`}
    >
      {props.ctype}
    </div>
  );
}
