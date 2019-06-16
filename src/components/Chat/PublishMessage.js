import React, { Component } from "react";
import PubSub from "../../pubsub";
import { sendMessage } from "../../actions/messages";


class PublishMessage extends Component {


  render() {
    return (
      <div>
        <h3>Got something to say?</h3>
        <input onChange={this.updateText} />
        <button onClick={this.publishMessage} onKeyPress={this.handleKeyPress}>
          Publish it!
        </button>
      </div>
    );
  }
}

export default PublishMessage;
