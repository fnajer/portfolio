import { NEW_MESSAGE } from "../actions/types";

const DEFAULT_STATE = {
  messages: []
};

const messagesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      return {
        ...state
      };
  }
};

export default messagesReducer;