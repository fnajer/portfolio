import { NEWS } from '../actions/types';

const DEFAULT_STATE = {
  items: [],
  message: ''
};

const newsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEWS.FETCH_SUCCESS:
      return {
        ...state,
        items: action.items
      }
    case NEWS.FETCH_ERROR:
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
}

export default newsReducer;