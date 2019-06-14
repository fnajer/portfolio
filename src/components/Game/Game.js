import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, cancelGame } from "../../actions/settings";
import { fetchNewDeck } from "../../actions/deck";
import Instructions from "./Instructions";
import DrawCard from "./DrawCard";
import fetchStates from "../../reducers/fetchStates";

class Game extends Component {
  startGame = () => {
    const { startGame, fetchNewDeck } = this.props;
    startGame();
    fetchNewDeck();
  };

  render() {
    const { gameStarted, cancelGame, fetchState, message } = this.props;
    if (fetchState === fetchStates.error)
      return (
        <div>
          <p>Please, try reloading the app. Ann error occurred.</p>
          <p>{message}</p>
        </div>
      );

    return (
      <div>
        <h2>♤ ♡ Evens or Odds ♥ ♢</h2>
        {gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <DrawCard />
            <hr />
            <button onClick={cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
};

const ConnectComponent = connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
);

export default ConnectComponent(Game);
