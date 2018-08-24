import React, { Component } from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = (props) => {
  return (
    <div className='video-player' ref={props.setRef}>
      { props.children }
    </div>
  )
}

export default VideoPlayerLayout;
