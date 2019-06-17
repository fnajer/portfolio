import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

export const sendMessage = ({ text, username }) => ({ 
  type: NEW_MESSAGE,
  message: {
    id: uuid(),
    timestamp: Date.now(),
    text,
    username
  }
});