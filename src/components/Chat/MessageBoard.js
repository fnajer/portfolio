import React from 'react';
import { connect } from 'react-redux';

const MessageBoard = ({ messages }) => {
  return (
    <div>
      {messages.map(message => {
        const { id, text, timestamp, username } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <h4>- {username}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  )
}

export default connect(
  state => ({ messages: state.messages.items })
)(MessageBoard);
