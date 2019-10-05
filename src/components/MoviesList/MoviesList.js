import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// material UI imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

class MoviesList extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
      this.getMovies();
  }

  // Send a dispatch to the Saga Watcher
  getMovies() {
      this.props.dispatch({ type: 'FETCH_MOVIES'});
  }

  
  render() {

    const { classes } = this.props;

    return (
      <div className="movieItems">
        <h2>My Movie List</h2>
        <div className="movieList">
            {this.props.reduxState.setMovies.map( (movie) => {
                return (
                <div key={movie.id}>
                    <Grid container className={classes.root} spacing= {16} justify="center">
                        <Grid item xs={5}>
                                <Paper>    
                                    <p><strong>{movie.title}</strong></p>
                                    <Link to={`/details/${movie.id}`} className="Link">
                                    <img className="MovieImage" src={movie.poster} alt="movie"></img> 
                                    </Link>
                                    <br />
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Paper>
                        </Grid>
                    </Grid>
                </div>
                )
            })}
        </div>
      </div>
    );
  }
}

// map redux to react
const mapStateToProps = reduxState => ({
    reduxState,
});

MoviesList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps) (withStyles(styles) (MoviesList));