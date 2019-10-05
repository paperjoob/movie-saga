import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-Header">
              <div>
                <h1 className="Welcome">Welcome to the Movie Saga!</h1>
              </div>
              <div className='HomeButton'>
                <button> <Link to="/" className="link">Home</Link></button>
              </div>
          </header>
            <Route exact path='/' component = {Movies} />
            <Route exact path='/details/:id' component = {MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
