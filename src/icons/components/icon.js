import React from 'react';
import classNames from 'classnames';
import './icon.css';

function Icon (props) {
  let { icon, extra } = props;
  let fullscreen = (icon === 'fullscreen');

  let className = classNames('fas', { [`fa-${icon}`]: !fullscreen, 'fa-arrows-alt': fullscreen, 'icon-rotate': fullscreen }, extra);

  return (
    <i className={className}></i>
  );
}

export default Icon;
