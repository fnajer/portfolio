import React from 'react';
import { connect } from 'react-redux';
import ReactionCreator from "./ReactionCreator";


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
            <ReactionCreator />
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
