import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMovie extends Component {

    // keeps changes made to input and textareas
    inputChange = (event, propertyName) => {
        console.log('inPutChange', event.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Edit The Following:</h2>
                    <form id="changeForm">
                        <input onChange={(event) => {this.inputChange(event, 'title')}} placeholder="Movie Title"></input>
                    </form>
                    <br />
                    <textarea onChange={(event) => {this.inputChange(event, 'description')}} rows="8" cols="50" form="changeForm"></textarea>
                </div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (EditMovie);