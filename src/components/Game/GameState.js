import React from "react";
import { connect } from "react-redux";

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD';

const checkRecord = correctGuesses => {
  const record = Number(localStorage.getItem(correctGuessesRecordKey));

  if (record < correctGuesses) {
    localStorage.setItem(correctGuessesRecordKey, correctGuesses);
    return {
      record: correctGuesses, isNewRecord: true
    }
  }
  return {
    record, isNewRecord: false
  }
}

const GameState = ({ remaining, correctGuesses }) => {
  const cardText = remaining === 1 ? "card" : "cards";
  const guessText = correctGuesses === 1 ? "guess" : "guesses";

  const { record, isNewRecord } = checkRecord(correctGuesses);
  const recordLabel = isNewRecord ? "🎉 New Record" : "Record";

  return (
    <div>
      <h3>{recordLabel}: {record}</h3>
      <p>{remaining} {cardText} is remaining</p>
      <p>{correctGuesses} correct {guessText}</p>
    </div>
  );
};

export default connect(state => ({
  remaining: state.deck.remaining,
  correctGuesses: state.gameState.correctGuesses
}))(GameState);
