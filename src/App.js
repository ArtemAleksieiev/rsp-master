import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js'
import { Button } from 'react-bootstrap';

class Game extends Component {
  constructor (){
    super();
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors"
    }
  };

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)]
    })
  };

  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;
    if (playerOne === playerTwo) {
      return "Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  render(){
    return (
    <div className="style">
    <div>
    <PlayerCard sign={this.state.playerOne}/>
    <PlayerCard sign={this.state.playerTwo}/>
    </div>
    <div className="winner">
      {this.decideWinner()}
    </div>
     <Button variant="primary"
            size="lg"
            onClick = {this.playGame}>
            Play the Game
      </Button>
      </div>
    )
  }
}

export default Game;
