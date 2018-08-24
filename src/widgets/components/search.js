import React from 'react';
import './search.css';

const Search = (props) => (
  <form className="search" onSubmit={props.handleSubmit}>
    <i className="search-icon fas fa-search" aria-hidden="true"></i>
    <input type="text" name="search" placeholder="Busca tu video favorito" className="search-input"
      ref={props.setSearch} onChange={props.handleChange} value={props.value} />
  </form>
)

export default Search;
