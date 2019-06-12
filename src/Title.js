import React, { Component } from "react";

const TITLES = [
  "a software engineer",
  "a music lover",
  "an a enthusiastic learner",
  "an adventure seeker"
];

export class Title extends Component {
  state = { titleIndex: 0 }

  componentDidMount() {
    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex })
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  render() {
    return <p>I'm {TITLES[this.state.titleIndex]}</p>;
  }
}

export default Title;
