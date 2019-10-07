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

    // when clicked, the updateform will display so users can make changes to movie
    handleUpdate = () => {
        this.setState({displayUpdateForm: true})
      }

    render() {
        
        // map through the movie title and description in a form format
        const movieDisplay = this.props.reduxState.detailsReducer.map( (movie, id) => {
            return (
                <>
                <div key={movie.id}>
                    Title:
                    <br />
                    <input placeholder={movie.title}></input>
                    <br />
                    Description:
                    <br />
                    <textarea rows="15" cols="60" placeholder={movie.description}></textarea>
                    <br />
                    <button onClick={() => { this.handleUpdate() }}>Make Changes</button>
                    <button onClick={() => {this.props.history.push(`/details/${this.props.match.params.id}`)}} >Cancel</button>
                </div>
                </>
            )
        })

        return (
            <div>
                <h2>Edit Movie</h2>
                {movieDisplay}
                <br />
                {this.state.displayUpdateForm ? <UpdateEdits movie={this.props.reduxState.detailsReducer[0]} getMovieById={this.getMovieById} history={this.props.history}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (EditMovie);