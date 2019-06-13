import React, { Component } from "react";
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    console.log(this);
    return <div>Hello</div>;
  }
}

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
});

const ConnectComponent = connect(mapStateToProps);

export default ConnectComponent(Game);
