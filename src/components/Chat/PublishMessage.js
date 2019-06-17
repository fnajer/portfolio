import React, { Component } from "react";
import { connect } from "react-redux";
import { PubSubContext } from "../../pubsub";
import { sendMessage } from "../../actions/messages";

class PublishMessage extends Component {
  state = {
    text: ''
  };

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    const { text } = this.state;
    const { username } = this.props;

    this.context.publish(sendMessage({ text, username }));
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
  static contextType = PubSubContext;
}

export default connect(
  state => ({ username: state.user.name })
)(PublishMessage);
