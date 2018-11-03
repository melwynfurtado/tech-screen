import React, { Component } from 'react';
import Board from '../Board';

const ideas = [
  {
    uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
    title: "First Idea",
    desc: "What else can I say about this? Its brilliant!",
    createdTime: 1541258930814, 
    updatedTime: 1541258930814,
  },
  {
    uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
    title: "Second Idea",
    desc: "This is not as good as first one. But it should work!",
    createdTime: 1541258930814, 
    updatedTime: 1541258930814,
  },  
]

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
        <Board ideas={ideas} />
      </div>
    );
  }
}
