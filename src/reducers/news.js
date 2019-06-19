import { NEWS } from '../actions/types';
import fetchStates from "./fetchStates";

const DEFAULT_STATE = {
  items: [],
  fetchState: "",
  message: ""
};

const newsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEWS.FETCH_SUCCESS:
      return {
        ...state,
        items: action.items,
        fetchState: fetchStates.success
      }
    case NEWS.FETCH_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: fetchStates.error
      }
    default:
      return state;
  }
}

export default newsReducer;