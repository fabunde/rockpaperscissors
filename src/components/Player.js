import React, { Component } from "react";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  render() {
    return <div>Player: {this.props.pScore}</div>;
  }
}

export default Player;
