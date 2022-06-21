import React , { Component } from 'react';
import './App.css';

import ComicsList from './components/ComicsList';

class App extends Component {
  render() {
    return(
      <div>
        <ComicsList/>
      </div>
    )
  }
}

export default App;