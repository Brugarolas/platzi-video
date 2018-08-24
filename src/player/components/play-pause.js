import React from 'react';
import Icon from '../../icons/components/icon';
import './play-pause.css';

const PlayPause = (props) => {
  return (
    <div className='play-pause'>
      <button className='control-button' onClick={props.handleClick}>
        <Icon icon='play'  extra={'control-icon' + (props.playing ? ' hidden' : '')} />
        <Icon icon='pause' extra={'control-icon' + (props.playing ? '' : ' hidden')} />
      </button>
    </div>
  )
}

export default PlayPause;
