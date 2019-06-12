import React, { Component } from 'react';
import './App.css';
import Biography from './Biography';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

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
        <p>My name is Alexey. I'm a software engineer</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        <Biography show={displayBio} toggleShow={this.toggleDisplayBio}/>
        <hr/>
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
