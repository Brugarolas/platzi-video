import React from 'react';
import Icon from '../../icons/components/icon';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category (props) {
  const { title, description, playlist, openModal } = props;

  return (
    <article className='category'>
      <span className='category-description'>{ description }</span>
      <h2 className='category-title'>{ title }</h2>
      <Playlist playlist={playlist} openModal={openModal} key={props.id} />
    </article>
  );
}

export default Category;
