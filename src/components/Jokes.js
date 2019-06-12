import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 10 }}>
    {setup}
    <em>{punchline}</em>
  </p>
);

class Jokes extends Component {
  state = {
    joke: {},
    jokes: []
  };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(response => response.json())
      .then(json => this.setState({ joke: json[0] }))
      .catch(err => alert(err.message));
  }
  // async componentDidMount() {
  //   const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");

  //   const joke = await response.json();
  //   this.setState({ joke: joke[0] });
  // }
  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(err => alert(err.message));
  };

  render() {
    const { joke, jokes } = this.state;
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={joke} />
        <hr />
        <h3>Do you want 10 new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {jokes.map(joke => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
