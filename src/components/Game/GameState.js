import React from "react";
import { connect } from "react-redux";

const GameState = ({ remaining, correctGuesses, record, isNewRecord }) => {
  const cardText = remaining === 1 ? "card" : "cards";
  const guessText = correctGuesses === 1 ? "guess" : "guesses";

  const recordLabel = isNewRecord ? "🎉 New Record" : "Record";

  return (
    <div>
      <h3>
        {recordLabel}: {record}
      </h3>
      <p>
        {remaining} {cardText} is remaining
      </p>
      <p>
        {correctGuesses} correct {guessText}
      </p>
    </div>
  );
};

export default connect(state => ({
  remaining: state.deck.remaining,
  correctGuesses: state.gameState.correctGuesses,
  record: state.gameState.record,
  isNewRecord: state.gameState.isNewRecord
}))(GameState);
