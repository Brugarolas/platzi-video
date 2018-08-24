import React from 'react'
import './progress-bar.css';

const ProgressBar = (props) => {
  return (
    <div className='progress-bar'>
      <input className='progress-bar-input' type='range' min={0} max={props.duration} value={props.value}
        onChange={props.onChange} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} />
    </div>
  );
}

export default ProgressBar;
