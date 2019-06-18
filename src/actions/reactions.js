import uuid from 'uuid/v4';

export const createReaction = ({ type, emoji, username, messageId }) => ({
  type: type,
  item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId }
});