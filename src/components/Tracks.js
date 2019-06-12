import React, { Component } from "react";

const Track = ({ toggleAudio, track: { album, name, preview_url } }) => {
  return (
    <div onClick={toggleAudio(preview_url)}>
      <img src={album.images[0].url} alt="album" />
      <p>{name}</p>
    </div>
  );
};

class Tracks extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null,
  }


  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map(track => (
          <Track key={track.id} track={track} toggleAudio={this.toggleAudio} />
        ))}
      </div>
    );
  }
}

export default Tracks;
