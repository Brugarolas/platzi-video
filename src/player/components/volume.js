import React from 'react';
import Icon from '../../icons/components/icon';
import classNames from 'classnames';
import './volume.css';

const showIcon = (volume) => {
  if (volume < 0.01) return 'off';
  if (volume < 0.50) return 'down';
  return 'up';
}

const Volume = (props) => {
  let icon = 'volume-' + showIcon(props.value, props.muted);
  let classes = classNames('volume-button', { 'muted-bar': props.muted });

  return (
    <div className='volume'>
      <button className={classes} onClick={props.toggleMute}>
        <Icon icon={icon} extra='volume-icon' />
      </button>
      <div className='volume-bar'>
        <input className='volume-bar-input' type='range' min={0} max={1} step={0.01} value={props.value} onChange={props.onChange} />
      </div>
    </div>
  );
}

export default Volume;
