import React from "react";
import { connect } from 'react-redux';

const Card = ({ cards }) => {
  if (!cards[0]) return null;

  const { value, suit, image } = cards[0];
  return (
    <div>
      <h2>
        {value} of {suit}
      </h2>
      <img src={image} alt="Card" />
    </div>
  );
};

export default connect(
  state => ({ cards: state.deck.cards })
)(Card);
