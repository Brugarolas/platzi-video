import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: ''
  }
  setSearch = (element) => {
    this.input = element;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
  }
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    });
  }

  render() {
    return (
      <Search setSearch={this.setSearch} handleSubmit={this.handleSubmit} handleChange={this.handleInputChange} value={this.state.value} />
    )
  }
}

export default SearchContainer;
