import React from 'react';
import './video-player-controls.css';

const VideoPlayerControls = (props) => {
  return (
    <div className='video-player-controls'>
      { props.children }
    </div>
  )
}

export default VideoPlayerControls;
