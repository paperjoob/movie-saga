import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateEdits extends Component {

    state = {
        movieToUpdate: {
            title: this.props.movie.title,
            description: this.props.movie.description,
            id: this.props.movie.id
        }
    }

    // keeps changes made to input and textareas
    inputChange = (event, propertyName) => {
        this.setState({
            movieToUpdate: {
            ...this.state.movieToUpdate,
            [propertyName]: event.target.value
        }
        })
    }

    // save changes made in edit
    saveEdit = (event) => {
        event.preventDefault();
        this.props.dispatch( { type: 'UPDATE_MOVIE', payload: this.state.movieToUpdate});
        this.props.getMovieById();
        alert('Update successful');
        this.props.history.push(`/details/${this.state.movieToUpdate.id}`)
    }

    render() {
        
        // map through the movie title and description in a form format
        const movieDisplay = this.props.reduxState.detailsReducer.map( (movie) => {
            return (
                <>
                <div key={movie.id}>
                        <form id="changeForm" onSubmit={this.saveEdit}>
                        <input onChange={(event) => {this.inputChange(event, 'title')}} value={this.state.movieToUpdate.title}></input>
                        <br />
                        <textarea onChange={(event) => {this.inputChange(event, 'description')}} rows="12" cols="100" form="changeForm" value={this.state.movieToUpdate.description}></textarea>
                        <br />
                        <button type="submit">Save</button>
                        </form>
                        <br />
                </div>
                </>
            )
        })

        return (
            <div>
                {movieDisplay}
                {/* <pre>{JSON.stringify(this.state)}</pre>  */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (UpdateEdits);