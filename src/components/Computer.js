import React, { Component } from "react";

class Computer extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  render() {
    return <div>Computer: {this.props.cComputer}</div>;
  }
}

export default Computer;
