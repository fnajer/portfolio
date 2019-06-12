import React, { Component } from 'react'

export class Music extends Component {
  state = {
    artistQuery: '',
  }

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  searchArtist = () => {
    console.log('search');
  }

  handleKeyPress = event => {
    if (event.key === 'Enter')
      this.searchArtist();
  }

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input onChange={this.updateArtistQuery} onKeyPress={this.handleKeyPress}/>
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default Music
