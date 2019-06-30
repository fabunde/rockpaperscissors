import React, { Component } from "react";
import Header from "./components/Header";
import Choices from "./components/Choices";
import Score from "./components/Score";
import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cScore: 0,
      pScore: 0,
      cChoice: "",
      pChoice: "",
      winner: "",
      showModal: false
    };
  }

  handleChoice = pChoice => {
    // get computer choice
    let cChoice = this.getComputerChoice();

    // determine winnner
    let winner = this.determineWinner(pChoice, cChoice);
    this.updateScore(winner);

    // set Winner, computer & player Choice
    this.setState({
      winner,
      cChoice,
      pChoice,
      showModal: true
    });

    //hide modal
    this.hideModal();
    // console.log(winner);
  };

  getComputerChoice = () => {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand < 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  };

  determineWinner = (p, c) => {
    if (p === c) {
      return "Draw";
    } else if (p === "paper" && c === "rock") {
      return "Player";
    } else if (p === "scissors" && c === "paper") {
      return "Player";
    } else if (p === "rock" && c === "scissors") {
      return "Player";
    } else {
      return "Computer";
    }
  };

  updateScore = winner => {
    if (winner === "Computer") {
      this.setState({
        cScore: this.state.cScore + 1
      });
    } else if (winner === "Player") {
      this.setState({
        pScore: this.state.pScore + 1
      });
    }
  };

  handleReset = () => {
    this.setState({ pScore: 0, cScore: 0 });
  };

  hideModal = () => {
    setTimeout(() => {
      this.setState({
        showModal: false
      });
    }, 1500);
  };
  render() {
    let { cScore, pScore, pChoice, cChoice, winner, showModal } = this.state;
    return (
      <div>
        <Header handleReset={this.handleReset} />
        <Score computerC={cScore} playerS={pScore} />
        <Choices getChoice={this.handleChoice} />
        {showModal && (
          <Modal
            winner={winner}
            playerChoice={pChoice}
            computerChoice={cChoice}
          />
        )}
      </div>
    );
  }
}

export default App;
