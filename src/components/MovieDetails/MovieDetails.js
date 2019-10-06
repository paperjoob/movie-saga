import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    // Renders the details on the DOM
    componentDidMount() {
        this.getMovieById();
        this.getGenres();
    }

    // Sends a dispatch to the Saga Watcher for the Grab Details type to match the id
    getMovieById = () => {
        this.props.dispatch( {type: 'GRAB_DETAILS', payload: this.props.match.params.id })
    }

    // when clicked, handleBack takes you to the home page
    handleBack = () => {
        console.log('in handleBack');
        this.props.history.push('/');
    }

    // when clicked, handleEdit takes you to the Edit page
    handleEdit = () => {
        console.log('in EDIT');
        this.props.history.push('/edit');
    }

    getGenres = () => {
        this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.match.params.id })
    }

    render() {

        // loop through movie details
        const displayDetails = this.props.reduxState.detailsReducer.map( (movie) => {
            return (
                <div key={movie.id}>
                    <img src= {movie.poster} alt="moviepicture"/>
                    <br />
                    <p><strong>Title:</strong></p> {movie.title}
                    <br />
                    Description: {movie.description}
                </div>
            )
        })

        return (
            <div className="DetailsDiv">
                <button onClick={this.handleBack}>Back to Home</button>
                <button onClick={this.handleEdit}>Edit</button>
                <h2>Movie Details</h2>
                {displayDetails}
                <p><strong>Genres:</strong></p>
                <div>
                    {this.props.reduxState.setGenres.map( (movies) => {
                        return (
                            <div key={movies.id}>
                                {movies.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

// map redux to react
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (MovieDetails);