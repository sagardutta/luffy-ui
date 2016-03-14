import React from 'react';
import { Component } from 'react';
import SearchPage from '../containers/search_page'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
