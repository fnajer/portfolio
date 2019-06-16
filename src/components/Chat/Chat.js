import React, { Component } from "react";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";

class Chat extends Component {
  render() {
    return (
      <div>
        <h2>Chat Reaction</h2>
        <hr/>
        <PublishMessage/>
        <hr />
        <MessageBoard />
      </div>
    );
  }
}

export default Chat;
