import React, { Component } from 'react';
import formatDuration from 'format-duration';
import './timer.css';

class Timer extends Component {
  format = (time) => formatDuration(time * 1000);

  render () {
    const duration = this.format(this.props.duration);
    const time = this.format(this.props.time);

    return (<div className='timer'>{ time } / { duration }</div>);
  }
}

export default Timer;
