import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import './modal-container.css';

class ModalContainer extends PureComponent {
  render () {
    const { children, visible } = this.props;
    const className = classNames('modal-container', { 'hidden' : !visible });

    return createPortal(
      <div className={className}>{ children }</div>,
      document.getElementById('modal-container')
    );
  }
}

export default ModalContainer;
