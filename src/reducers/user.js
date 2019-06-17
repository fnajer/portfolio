import { SET_USERNAME } from "../actions/types";

const DEFAULT_STATE = {
  name: 'anonymous',
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default userReducer;