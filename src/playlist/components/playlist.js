import React, { Component } from 'react';
import Media from './Media';
import './playlist.css';

class Playlist extends Component {
  render () {
    const { playlist, openModal } = this.props;

    const renderPlaylist = (playlist, openModal) => {
      return playlist.map((item) => {
        return <Media {...item} onClick={openModal} key={item.id} />;
      });
    };

    return (
      <div className='playlist'>
        {
          renderPlaylist(playlist, openModal)
        }
      </div>
    );
  }
};

export default Playlist;
