import React, { Component } from "react";

const Track = ({
  toggleAudio,
  trackIcon,
  track,
  track: { album, name, preview_url }
}) => {
  return (
    <div onClick={toggleAudio(preview_url, track)} className="track">
      <img src={album.images[0].url} alt="album" className="track-image" />
      <p className="track-text">{name}</p>
      <p className="track-icon">{trackIcon(track)}</p>
    </div>
  );
};

class Tracks extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null
  };

  trackIcon = track => {
    if (!track.preview_url) return <span>N/A</span>;

    if (this.state.playing && track.preview_url === this.state.playingPreviewUrl)
      return <span>| |</span>;

    return <span>&#9654;</span>;
  };

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
  };

  isPlaying = () => this.state.playing;
  pause = () => this.state.audio.pause();
  play = (audio, previewUrl) => {
    audio.play();
    this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
  };
  wasClickedAnotherAudio = previewUrl =>
    this.state.playingPreviewUrl !== previewUrl;

  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map(track => (
          <Track
            key={track.id}
            track={track}
            toggleAudio={this.toggleAudio}
            trackIcon={this.trackIcon}
          />
        ))}
      </div>
    );
  }
}

export default Tracks;
