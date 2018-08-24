import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  constructor (props) {
    super(props);
    // this.handleClick = this.props.handleClick.bind(this); // No necesario, Arrow function siempre heredan contexto de padre
  }

  handleClick = (event) => {
    this.props.onClick(this.props);
  }

  render () {
    const { title, author, cover } = this.props;

    return (
      <div className='media' onClick={ this.handleClick }>
        <div className='media-cover'>
          <img className='media-image'
            src={ cover } alt={ title }
            width={260} height={160} />
        </div>
        <h3 className='media-title'>{ title }</h3>
        <p className='media-author'>{ author }</p>
      </div>
    )
  }
};

Media.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
};

export default Media;
