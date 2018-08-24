import React from 'react';
import './main.css';

function Main (props) {
  return (
    <main className='main'>{ props.children }</main>
  )
}

export default Main;
