import React from 'react';
import './spinner.css';

const Spinner = (props) => {
  return (
    props.show && <div className='spinner-wrapper'><i className='fas fa-spinner spinner'></i></div>
  );
}

export default Spinner;
