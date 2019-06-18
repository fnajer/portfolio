import React from 'react';
import { connect } from 'react-redux';
import ReactionCreator from "./ReactionCreator";

const ReactionsMessage = ({ reactionsMessage }) => {
  if (!reactionsMessage) return null;
  
  return (
    reactionsMessage.map((reaction, index) => {
      const { id, username, emoji } = reaction;

      return (
        <span key={id}>
          <i>{username}</i>{' '}
          {emoji}
          {index !== reactionsMessage.length - 1 ? ', ' : null}
        </span>
      )
    })
  )
}

const MessageBoard = ({ messages, reactions }) => {
  return (
    <div>
      {messages.map(message => {
        const { id, text, timestamp, username } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <h4>- {username}</h4>
            <ReactionCreator messageId={id}/>
            <ReactionsMessage reactionsMessage={reactions[id]} />
            <hr />
          </div>
        );
      })}
    </div>
  )
}

export default connect(
  state => ({ 
    messages: state.messages.items,
    reactions: state.reactions
  })
)(MessageBoard);
