import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

export class Music extends Component {
  state = {
    artistQuery: '',
    artist: null,
    tracks: []
  }

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total < 1)
          return;

        const artist = json.artists.items[0];
        this.setState({ artist });

        this.getTopTracks(artist.id);
      })
      .catch(err => alert(err.message));
  }

  getTopTracks = idArtist => {
    fetch(`${API_ADDRESS}/artist/${idArtist}/top-tracks`)
      .then(response => response.json())
      .then(json => this.setState({ tracks: json.tracks }))
      .catch(err => alert(err.message));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter')
      this.searchArtist();
  }

  render() {
    const { artist, tracks } = this.state;
    return (
      <div>
        <h2>Music Master</h2>
        <input onChange={this.updateArtistQuery} onKeyPress={this.handleKeyPress} placeholder="Search for an Artist" />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={artist} />
        <Tracks tracks={tracks} />
      </div>
    )
  }
}

export default Music
