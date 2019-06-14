import { combineReducers } from 'redux';
import settingsReducer from "./settings";
import deckReducer from "./deck";

const rootReducer = combineReducers({
  settings: settingsReducer,
  deck: deckReducer
});

export default rootReducer;
