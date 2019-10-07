import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateEdits from '../UpdateEdits/UpdateEdits';

class EditMovie extends Component {

    state = {
        displayUpdateForm: false
    }

    // Renders the details on the DOM
    componentDidMount() {
        this.getMovieById();
    }

    // Sends a dispatch to the Saga Watcher for the Grab Details type to match the id
    getMovieById = () => {
        this.props.dispatch( {type: 'GRAB_DETAILS', payload: this.props.match.params.id })
    }

    handleUpdate = () => {
        this.setState({displayUpdateForm: true})
      }


    render() {
        
        // map through the movie title and description in a form format
        const movieDisplay = this.props.reduxState.detailsReducer.map( (movie, id) => {
            return (
                <>
                <div key={movie.id}>
                        <p>Name: {movie.title}</p>
                        <br />
                        <p>Description: {movie.description}</p>
                        <br />
                        <button onClick={() => { this.handleUpdate() }}>Make Changes</button>
                </div>
                </>
            )
        })

        return (
            <div>
                {/* <div> */}
                    <h2>Edit:</h2>
                {movieDisplay}
                {this.state.displayUpdateForm ? <UpdateEdits movie={this.props.reduxState.detailsReducer[0]} getMovieById={this.getMovieById}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (EditMovie);