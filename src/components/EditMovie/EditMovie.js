import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMovie extends Component {

    state = {
        editMovie: {
            id: this.props.match.params.id,
            title: '',
            description: ''
        }
    }

    // keeps changes made to input and textareas
    inputChange = (event, propertyName) => {
        console.log('inPutChange', event.target.value); 
        this.setState({
            editMovie: {
            ...this.state.editMovie,
            [propertyName]: event.target.value
        }
        })
    }

    // navigate back to the details page
    handleBack = () => {
        console.log('in handleBack');
        this.props.history.push(`/details/${this.props.match.params.id}`);
    }

    // save changes made in edit
    saveEdit = (event) => {
        event.preventDefault();
        console.log('Save');
        this.props.dispatch( { type: 'UPDATE_MOVIE', payload: this.state.editMovie})
    }

    render() {
        
        // map through the movie title and description in a form format
        const movieDisplay = this.props.reduxState.detailsReducer.map( (movie, id) => {
            return (
                <>
                <div key={id}>
                        <form id="changeForm" onSubmit={this.updateMovie} >
                        <input onChange={(event) => {this.inputChange(event, 'title')}} placeholder={movie.title}></input>
                        </form>
                        <br />
                        <textarea onChange={(event) => {this.inputChange(event, 'description')}} rows="12" cols="100" form="changeForm" placeholder={movie.description}></textarea>
                </div>
                <button onClick={this.handleBack}>Cancel</button>
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