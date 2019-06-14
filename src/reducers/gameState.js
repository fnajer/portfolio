import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW } from "../actions/types";
import { checkRecord, getCurrentRecord } from "../utils";

const EVENS = ["2", "4", "6", "8", "0"];
const ODDS = ["ACE", "3", "5", "7", "9"];

const DEFAULT_STATE = {
  guess: "",
  correctGuesses: 0,
  record: getCurrentRecord(),
  isNewRecord: false,
};

const gameStateReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_GUESS:
      return {
        ...state,
        guess: action.guess
      };
    case SET_GAME_STARTED:
      return DEFAULT_STATE;
    case DECK_DRAW.FETCH_SUCCESS:
      const { value } = action.cards[0];
      const { guess, correctGuesses } = state;

      if (
        (guess === "even" && EVENS.includes(value)) ||
        (guess === "odd" && ODDS.includes(value))
      ) {
        const { record, isNewRecord } = checkRecord(correctGuesses + 1);
        return {
          ...state,
          correctGuesses: correctGuesses + 1,
          record,
          isNewRecord
        };
      }
      return state;
    default:
      return state;
  }
};

export default gameStateReducer;
