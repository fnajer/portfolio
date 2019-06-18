import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from "../../actions/types";
import { createReaction } from '../../actions/reactions';
import { PubSubContext } from '../../pubsub';

class ReactionCreator extends Component {
  publishReaction = ({ type, emoji }) => () => {
    const { username, messageId } = this.props;

    this.context.publish(createReaction({ type, emoji, username, messageId }));
  }

  render() {
    return (
      <div>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const { type, emoji } = REACTION_OBJECT;

            return (
              <span 
                key={type} 
                style={{ margin: 5, cursor: 'pointer' }}
                onClick={this.publishReaction({ type, emoji })}
              >
                {emoji}
              </span>
            )
          })
        }
      </div>
    );
  }
  static contextType = PubSubContext;
}

export default connect(
  state => ({ username: state.user.name })
)(ReactionCreator);