import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    // Renders the details on the DOM
    componentDidMount() {
        this.getMovieById();
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
        this.props.history.push('/api/movies/edit');
    }

    render() {

        // loop through movie details
        const displayDetails = this.props.reduxState.detailsReducer.map( (movie) => {
            return (
                <div key={movie.id}>
                    <img src= {movie.poster} alt="moviepicture"/>
                    <br />
                    Title: {movie.title}
                    <br />
                    Description: {movie.description}
                    <br />
                    Genres: {movie.name}
                </div>
            )
        })

        return (
            <div>
                {/* <div>
                    {this.props.reduxState.detailsReducer.map( (movie) => {
                        return (
                            <div key={movie.id}>
                                Title: {movie.title}
                            </div>
                        )
                    })}
                </div> */}
                {displayDetails}

                <br />
                <button onClick={this.handleBack}>Back to Home</button>
                <button onClick={this.handleEdit}>Edit</button>
            </div>
        )
    }
}

// map redux to react
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (MovieDetails);