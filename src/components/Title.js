import React, { Component } from "react";

const TITLES = [
  "a software engineer",
  "a music lover",
  "an a enthusiastic learner",
  "an adventure seeker"
];

export class Title extends Component {
  state = {
    titleIndex: 0,
    fadeIn: true
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);

    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  };

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  render() {
    const { titleIndex, fadeIn } = this.state;
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I'm {TITLES[titleIndex]}
      </p>
    );
  }
}

export default Title;
