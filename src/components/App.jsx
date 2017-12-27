import React, {Component} from 'react';

import Login from './Login';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div id="container" className="inner-container">
        <Login/>
      </div>
    );
  }
}

export default App;
