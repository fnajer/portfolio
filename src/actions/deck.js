import { DECK } from './types';

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
  return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      if (response.status !== 200)
        throw new Error("Unsuccessful request to deckofcardsapi.com");
      return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(err => dispatch(fetchDeckError(err)));
};