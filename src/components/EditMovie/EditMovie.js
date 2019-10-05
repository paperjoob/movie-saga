import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMovie extends Component {
    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps) (EditMovie);