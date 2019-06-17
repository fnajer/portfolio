import React, { Component } from 'react';
import { REACTION_OBJECTS } from "../../actions/types";

class ReactionCreator extends Component {
  render() {
    return (
      <div>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const { type, emoji } = REACTION_OBJECT;

            return (
              <span key={type} style={{ margin: 5, cursor: 'pointer' }}>
                {emoji}
              </span>
            )
          })
        }
      </div>
    );
  }
}

export default ReactionCreator;