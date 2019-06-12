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

  toggleAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if (!this.isPlaying()) {
      this.play(audio, previewUrl);
    } else {
      this.pause();
      
      if (this.wasClickedAnotherAudio(previewUrl)) {
        this.play(audio, previewUrl);
      } else {
        this.setState({ playing: false });
      }
    }
  }

  isPlaying = () => this.state.playing;
  pause = () => this.state.audio.pause();
  play = (audio, previewUrl) => {
    audio.play();
    this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
  }
  wasClickedAnotherAudio = previewUrl => this.state.playingPreviewUrl !== previewUrl;

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
