import React from "react";
import { connect } from 'react-redux';
import { fetchDrawCard } from '../../actions/deck';

const DrawCard = ({ deckId, fetchDrawCard }) => {
  return (
    <div>
      <button onClick={() => fetchDrawCard(deckId)}>Draw the next card!</button>
    </div>
  );
};

export default connect(
  state => ({ deckId: state.deck.deckId }),
  { fetchDrawCard }
)(DrawCard);
