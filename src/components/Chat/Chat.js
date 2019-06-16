import React, { Component } from "react";
import PublishMessage from "./PublishMessage";

class Chat extends Component {
  render() {
    return (
      <div>
        <h2>Chat Reaction</h2>
        <hr/>
        <PublishMessage/>
      </div>
    );
  }
}

export default Chat;
