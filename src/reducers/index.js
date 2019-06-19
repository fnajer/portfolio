import { combineReducers } from 'redux';
import settingsReducer from "./settings";
import deckReducer from "./deck";
import gameStateReducer from "./gameState";
import messagesReducer from "./messages";
import userReducer from "./user";
import reactionsReducer from "./reactions";
import newsReducer from "./news";

const rootReducer = combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  gameState: gameStateReducer,
  messages: messagesReducer,
  user: userReducer,
  reactions: reactionsReducer,
  news: newsReducer
});

export default rootReducer;
