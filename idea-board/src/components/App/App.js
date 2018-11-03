import React, { Component } from 'react';
import Board from '../Board';

export default class App extends Component {
  componentDidMount() {
    // Load board ideas from localstorage or any other persistence layer
    // So you can initialize different Boards with different data sets
    // Like Idea board for database design, API design, etc

    // Alternatively, you can pass config to the Board component 
    // So that it does state management internally

    // I think above 2 approaches can serve different requirements
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Idea Board App</h1>
        <Board ideas={[]} />
      </div>
    );
  }
}
