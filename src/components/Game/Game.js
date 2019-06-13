import React, { Component } from "react";
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../../actions/settings';

class Game extends Component {
  render() {
    const { gameStarted, startGame, cancelGame} = this.props;
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
              <button onClick={startGame}>Start Game</button>
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
})

const ConnectComponent = connect(mapStateToProps, mapDispatchToProps);

export default ConnectComponent(Game);
