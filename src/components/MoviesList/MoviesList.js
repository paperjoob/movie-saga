import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
      this.getMovies();
  }

  // Send a dispatch to the Saga Watcher
  getMovies() {
      this.props.dispatch({ type: 'FETCH_MOVIES'});
  }

  
  render() {
    return (
      <div className="movieItems">
        <h2>Movies to Watch</h2>
        <div className="movieList">
            {this.props.reduxState.setMovies.map( (movie) => {
                return (
                <div key={movie.id}>
                    <img className="MovieImage" src={movie.poster} alt="movie"></img> 
                    <p>{movie.title}</p>
                </div>
                )
            })}
        </div>
      </div>
    );
  }
}

// map redux to react
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (MoviesList);