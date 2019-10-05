import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    componentDidMount() {
        this.getMovieById();
    }

    getMovieById = () => {
        this.props.dispatch( {type: 'GRAB_DETAILS', payload: this.props.match.params.id })
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.reduxState.detailsReducer.map( (movie, id) => {
                        return (
                            <div key={movie.id}>
                                Title: {movie.title}
                                <br />
                                Description: {movie.description}
                                <br />
                                Genres: {movie.name}
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