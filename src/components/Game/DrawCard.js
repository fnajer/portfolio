import React from "react";
import { connect } from 'react-redux';

const DrawCard = ({ deckId }) => {
  console.log(deckId);
  return (
    <div>
      <button>Get the next card</button>
    </div>
  );
};

export default connect(
  state => ({ deckId: state.deck.deckId })
)(DrawCard);
