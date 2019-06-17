import React, { Component } from "react";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import UserView from "./UserView";

class Chat extends Component {
  render() {
    return (
      <div>
        <h2>Chat Reaction</h2>
        <UserView />
        <hr/>
        <PublishMessage/>
        <hr />
        <MessageBoard />
      </div>
    );
  }
}

export default Chat;
