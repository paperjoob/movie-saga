import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMovie extends Component {

    state = {
        editMovie: {
            title: '',
            description: ''
        }
    }

        // Renders the details on the DOM
        componentDidMount() {
            this.getMovie();
        }
    
        // Sends a dispatch to the Saga Watcher for the Grab Details type to match the id
        getMovie = () => {
            this.props.dispatch( {type: 'FETCH_DETAILS_EDIT', payload: this.props.match.params.id })
        }

    // keeps changes made to input and textareas
    inputChange = (event, propertyName) => {
        console.log('inPutChange', event.target.value);
        this.setState({
            editMovie: {
                ...this.setState.editMovie,
                [propertyName]: event.target.value
            }
        })
    }

    updateMovie = (event) => {
        console.log('in updateMovie');
        event.preventDefault();
        this.props.dispatch( {type: 'UPDATE_MOVIE', payload: this.state.editMovie})
        alert('Update Successful');
    }

    // navigate back to the details page
    handleBack = () => {
        console.log('in handleBack');
        this.props.history.push(`/details/${this.props.match.params.id}`);
    }

    // save changes made in edit
    saveEdit = () => {
        console.log('Save');
    }

    render() {
        
        // map through the movie title and description in a form format
        const movieDisplay = this.props.reduxState.detailsReducer.map( (movie) => {
            return (
                <>
                <div key={movie.id}>
                        <form id="changeForm" onSubmit={this.updateMovie}>
                        <input onChange={(event) => {this.inputChange(event, 'title')}} placeholder={movie.title} value={this.state.editMovie.name}></input>
                        </form>
                        <br />
                        <textarea onChange={(event) => {this.inputChange(event, 'description')}} rows="12" cols="100" form="changeForm" placeholder={movie.description}></textarea>
                </div>
                <button onClick={this.handleBack}>Cancel Change</button>
                <button onClick={this.saveEdit}>Save</button>
                </>
            )
        })

        return (
            <div>
                {/* <div> */}
                    <h2>Edit:</h2>
                {movieDisplay}
                <pre>{JSON.stringify(this.state)}</pre> 
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (EditMovie);