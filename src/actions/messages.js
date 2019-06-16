import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

export const sendMessage = text => ({ 
  type: NEW_MESSAGE,
  message: {
    text,
    timestamp: Date.now(),
    id: uuid()
  }
});