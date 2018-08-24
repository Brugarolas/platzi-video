import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.playing === undefined) {
      return;
    }

    if (nextProps.playing !== this.props.playing) {
      this.togglePlay();
    }
  }

  togglePlay = () => {
    (this.props.playing ? this.video.pause : this.video.play).bind(this.video)();
  }
  setVideo = (element) => {
    this.video = element;
  }

  render () {
    const { autoplay, src, onLoadedMetadata, onTimeUpdate, onVideoReady, onVideoLoading } = this.props;

    return (
      <div className='video'>
        <video className='video-media' autoPlay={autoplay} src={src} ref={this.setVideo} preload='auto'
          onLoadedMetadata={onLoadedMetadata} onTimeUpdate={onTimeUpdate}
          onCanPlayThrough={onVideoReady} onSeeking={onVideoLoading} onSeeked={onVideoReady} onWaiting={onVideoLoading} />
        { this.props.children }
      </div>
    );
  }
}

export default Video;
