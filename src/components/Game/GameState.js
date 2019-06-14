import React from "react";
import { connect } from "react-redux";

const GameState = ({ remaining, correctGuesses }) => {
  const cardText = remaining === 1 ? "card" : "cards";
  const guessText = correctGuesses === 1 ? "guess" : "guesses";

  return (
    <div>
      <p>{remaining} {cardText} is remaining</p>
      <p>{correctGuesses} correct {guessText}</p>
    </div>
  );
};

export default connect(state => ({
  remaining: state.deck.remaining,
  correctGuesses: state.gameState.correctGuesses
}))(GameState);
