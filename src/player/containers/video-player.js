import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import VideoPlayerControls from '../components/video-player-controls';
import Title from '../components/title';
import Video from '../components/video';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    playing: false,
    loading: true,
    time: 0,
    duration: 0,
    volume: 1.0,
    muted: false,
    fullscreen: false
  }

  setLayout = (element) => {
    this.layout = element;
  }

  playPause = (event) => {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }

  onTimeUpdate = (event) => {
    this.setState({
      time: this.video.currentTime
    });
  }

  changeTime = (event) => {
    this.video.currentTime = event.target.value;
  }
  progressPauseVideo = (event) => {
    if (this.state.playing) {
      this.video.pause();
    }
  }
  progressStartVideo = (event) => {
    if (this.state.playing) {
      this.video.play();
    }
  }

  startSpinner = (event) => {
    this.setState({
      loading: true
    });
  }
  stopSpinner = (event) => {
    this.setState({
      loading: false
    });
  }

  changeVolume = (event) => {
    if (!this.state.muted) {
      this.video.volume = event.target.value;
    }
    this.setState({
      volume: event.target.value
    });
  }
  toggleMute = (event) => {
    this.video.volume = this.state.muted ? this.state.volume : 0;
    this.setState({
      muted: !this.state.muted
    });
  }

  toggleFullscreen = (event) => {
    let toggle = undefined;
    let target = this.state.fullscreen ? document : this.layout;

    if (this.state.fullscreen) {
      toggle = target.exitFullscreen || target.mozCancelFullScreen || target.webkitExitFullscreen || target.msExitFullscreen;
    } else {
      toggle = target.requestFullscreen || target.mozRequestFullScreen || target.webkitRequestFullscreen || target.msRequestFullscreen;
    }

    if (toggle !== undefined) {
      toggle.bind(target)();
      this.setState({
        fullscreen: !this.state.fullscreen
      });
    } else {
      console.warn('Fullscreen functionality is not available!');
    }
  }

  componentDidMount () {
    this.setState({
      playing: this.props && this.props.autoplay
    });
    this.setState({
      autoplay: this.state.playing
    });
  }
  render() {
    const { playing, autoplay, loading, time, duration, volume, muted } = this.state;
    const { title, author, type, cover, src, id } = this.props.video;

    return (
      <VideoPlayerLayout setRef={this.setLayout}>
        <Title title={title} />
        <Video src={src} autoplay={autoplay} playing={playing}
          onLoadedMetadata={this.handleMetadata} onTimeUpdate={this.onTimeUpdate}
          onVideoReady={this.stopSpinner} onVideoLoading={this.startSpinner}>
          <Spinner show={loading} />
        </Video>
        <VideoPlayerControls>
          <PlayPause handleClick={this.playPause} playing={playing} />
          <Volume value={volume} muted={muted} onChange={this.changeVolume} toggleMute={this.toggleMute} />
          <FullScreen toggleFullscreen={this.toggleFullscreen} />
          <Timer time={time} duration={duration} />
          <ProgressBar duration={duration} value={time} onChange={this.changeTime}
              onMouseDown={this.progressPauseVideo} onMouseUp={this.progressStartVideo} />
        </VideoPlayerControls>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
