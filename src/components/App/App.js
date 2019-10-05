import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditMovie from '../EditMovie/EditMovie';
// material UI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import HomeButton from '../elements/HomeButton';

// set color palatte for material UI
const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#757575',
        contrastText: '#fff',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: .2,
    text: {
        primary: '#64b5f6'
    }
  },
})

class App extends Component {
  // Renders the entire app on the DOM

  handleHome = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-Header">
                <div>
                  <h1 className="Welcome">Welcome to the Movie Saga!</h1>
                </div>
                <div className='HomeButton'>
                  <HomeButton />
                </div>
            </header>
              <Route exact path='/' component = {Movies} />
              <Route exact path='/details/:id' component = {MovieDetails} />
              <Route exact path='/edit' component = {EditMovie} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
