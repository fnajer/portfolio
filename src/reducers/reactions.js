import { REACTION_OBJECTS } from '../actions/types';

const REACTION_TYPES = REACTION_OBJECTS.map(
  REACTION_OBJECT => REACTION_OBJECT.type
);

const DEFAULT_STATE = {};

const reactionsReducer = (state = DEFAULT_STATE, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    const { messageId } = action.item;
    const reactionsMessage = state[messageId];

    if (reactionsMessage) {
      return { 
        ...state, 
        [messageId]: [...reactionsMessage, action.item]
      };
    }
    return {
      ...state,
      [messageId]: [action.item]
    }
  }

  return state;
};

export default reactionsReducer;