import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class Music extends Component {
  state = {
    artist: null,
    tracks: []
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
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

  render() {
    const { artist, tracks } = this.state;
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={artist} />
        <Tracks tracks={tracks} />
      </div>
    )
  }
}

export default Music
