import { FETCH_DECK_RESULT } from './types';

export const fetchDeckResult = deckJson => ({
  type: FETCH_DECK_RESULT,
  remaining: deckJson.remaining,
  deckId: deckJson.deck_id
});