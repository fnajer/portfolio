export const SET_GAME_STARTED = 'SET_GAME_STARTED';
export const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';
export const SET_GUESS = 'SET_GUESS';

export const DECK = {
  FETCH_SUCCESS: 'DECK_FETCH_SUCCESS',
  FETCH_ERROR: 'DECK_FETCH_ERROR'
};

export const DECK_DRAW = {
  FETCH_SUCCESS: 'DECK_DRAW_FETCH_SUCCESS',
  FETCH_ERROR: 'DECK_DRAW_FETCH_ERROR'
};

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const SET_USERNAME = 'SET_USERNAME';

export const REACTION_OBJECTS = [
  {
    type: 'REACTION_LOVE',
    emoji: '💖'
  },
  {
    type: 'REACTION_LIKE',
    emoji: '👍'
  },
  {
    type: 'REACTION_DISLIKE',
    emoji: '👎'
  },
  {
    type: 'REACTION_LAUGH',
    emoji: '😂'
  }
];