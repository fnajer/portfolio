import { combineReducers } from 'redux';
import settingsReducer from "./settings";
import deckReducer from "./deck";
import gameStateReducer from "./gameState";
import messagesReducer from "./messages";
import userReducer from "./user";
import reactionsReducer from "./reactions";

const rootReducer = combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  gameState: gameStateReducer,
  messages: messagesReducer,
  user: userReducer,
  reactions: reactionsReducer
});

export default rootReducer;
