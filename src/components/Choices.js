import React from "react";
import Choice from "./Choice";

let Choices = props => {
  let selectedChoice = ctype => {
    props.getChoice(ctype); //.log(ctype);
  };

  return (
    <div className="choices">
      <Choice selectedChoice={() => selectedChoice("rock")} ctype="rock" />
      <Choice selectedChoice={() => selectedChoice("paper")} ctype="paper" />
      <Choice
        selectedChoice={() => selectedChoice("scissors")}
        ctype="scissors"
      />
    </div>
  );
};

export default Choices;
