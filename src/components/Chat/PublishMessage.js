import React, { Component } from "react";
import pubsub from "../../pubsub";
import { sendMessage } from "../../actions/messages";

class PublishMessage extends Component {
  state = {
    text: ""
  };

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    pubsub.publish(sendMessage(this.state.text));
  };

  handleKeyPress = event => {
    if (event.key === "enter") this.publishMessage();
  };

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
