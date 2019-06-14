import { DECK, DECK_DRAW } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_STATE = {
  deckId: "",
  remaining: 0,
  fetchState: "",
  message: "",
  cards: []
};

const deckReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DECK.FETCH_SUCCESS:
      return {
        ...state,
        remaining: action.remaining,
        deckId: action.deckId,
        fetchState: fetchStates.success
      };
    case DECK.FETCH_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: fetchStates.error
      };
    case DECK_DRAW.FETCH_SUCCESS:
      return {
        ...state,
        remaining: action.remaining,
        cards: action.cards,
        fetchState: fetchStates.success
      };
    case DECK_DRAW.FETCH_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: fetchStates.error
      };
    default:
      return state;
  }
};

export default deckReducer;
