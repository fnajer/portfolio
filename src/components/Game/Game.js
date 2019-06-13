import React, { Component } from "react";
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../../actions/settings';

class Game extends Component {
  startGame = () => this.props.dispatch(startGame());
  cancelGame = () => this.props.dispatch(cancelGame());

  render() {
    return (
      <div>
        <h2>♤ ♡ Evens or Odds ♥ ♢</h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3>The game is on!</h3>
              <br />
              <button onClick={this.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.startGame}>Start Game</button>
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

const ConnectComponent = connect(mapStateToProps);

export default ConnectComponent(Game);