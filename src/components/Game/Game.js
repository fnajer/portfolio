import React, { Component } from "react";
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../../actions/settings';
import { fetchNewDeck } from '../../actions/deck';
import Instructions from './Instructions';

class Game extends Component {
  startGame = () => {
    const { startGame, fetchNewDeck } = this.props;
    startGame();
    fetchNewDeck();
  }

  render() {
    const { gameStarted, cancelGame} = this.props;
    return (
      <div>
        <h2>♤ ♡ Evens or Odds ♥ ♢</h2>
        {
          gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <br />
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
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
});
const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
  cancelGame: () => dispatch(cancelGame()),
  fetchNewDeck: () => fetchNewDeck(dispatch),
})

const ConnectComponent = connect(mapStateToProps, mapDispatchToProps);

export default ConnectComponent(Game);
