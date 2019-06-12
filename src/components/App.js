import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Biography from './Biography';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Jokes from './Jokes';

class App extends Component {
  state = {
    displayBio: false,
  }

  toggleDisplayBio = () => {
    this.setState((prevState, prevProps) => ({
      displayBio: !prevState.displayBio
    }));
  }

  render() {
    const { displayBio } = this.state;
    return (
      <div className="App">
        <img src={profile} alt="profile" className="profile"/>
        <h1>Hello!</h1>
        <p>My name is Alexey.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        <Biography show={displayBio} toggleShow={this.toggleDisplayBio}/>
        <hr/>
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
      </div>
    );
  }
}

export default App;
