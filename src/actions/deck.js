import { DECK, DECK_DRAW } from './types';

const API_ADDRESS = "https://deckofcardsapi.com/api";

const fetchDeckSuccess = deckJson => ({
  type: DECK.FETCH_SUCCESS,
  remaining: deckJson.remaining,
  deckId: deckJson.deck_id
});
const fetchDeckError = error => ({
  type: DECK.FETCH_ERROR,
  message: error.message
});

export const fetchNewDeck = () => dispatch => {
  return fetch(`${API_ADDRESS}/deck/new/shuffle/?deck_count=1`)
    .then(response => {
      if (response.status !== 200)
        throw new Error("Unsuccessful request to deckofcardsapi.com");
      return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(err => dispatch(fetchDeckError(err)));
};

const fetchCardSuccess = deckJson => ({
  type: DECK_DRAW.FETCH_SUCCESS,
  remaining: deckJson.remaining,
  cards: deckJson.cards
});
const fetchCardError = error => ({
  type: DECK_DRAW.FETCH_ERROR,
  message: error.message
});

export const fetchDrawCard = deckId => dispatch => {
  return fetch(`${API_ADDRESS}/deck/${deckId}/draw/?count=1`)
    .then(response => {
      if (response.status !== 200)
        throw new Error("Unsuccessful request to deckofcardsapi.com");
      return response.json();
    })
    .then(json => dispatch(fetchCardSuccess(json)))
    .catch(err => dispatch(fetchCardError(err)));
};