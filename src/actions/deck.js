import { FETCH_DECK_RESULT } from './types';

export const fetchDeckResult = deckJson => ({
  type: FETCH_DECK_RESULT,
  remaining: deckJson.remaining,
  deckId: deckJson.deck_id
});

export const fetchNewDeck = dispatch => {
  return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
    .then(json => dispatch(fetchDeckResult(json)))
    .catch(err => alert(err.message));
};