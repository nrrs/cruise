import React, { Component } from 'react';
import Pins from './components/pins/pinsContainer';
import Posts from './components/posts/postsContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pins />
        <Posts />
      </div>
    );
  }
}

export default App;
