import { NEW_MESSAGE } from "../actions/types";

const DEFAULT_STATE = {
  items: []
};

const messagesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.message]
      };
    default:
      return {
        ...state
      };
  }
};

export default messagesReducer;