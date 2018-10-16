import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ClubPageComponent from './components/ClubPageComponent';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <Route path = {`/clubs/:id`} component = {ClubPageComponent} />
	      </div>
     	</Router>
    );
  }
}

export default App;
