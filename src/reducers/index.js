import { combineReducers } from 'redux';
import settingsReducer from "./settings";
import deckReducer from "./deck";
import gameStateReducer from "./gameState";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  gameState: gameStateReducer,
  messages: messagesReducer,
});

export default rootReducer;
