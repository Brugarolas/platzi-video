import React from 'react';
import Icon from '../../icons/components/icon';
import './full-screen.css';

const FullScreen = (props) => {

  return (
    <div className='fullscreen'>
      <button className='fullscreen-button' onClick={props.toggleFullscreen}>
        <Icon icon='fullscreen' extra='fullscreen-icon' />
      </button>
    </div>
  );
}

export default FullScreen;
