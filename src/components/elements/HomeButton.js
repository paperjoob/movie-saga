import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import {Link } from 'react-router-dom';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit * 0,
        padding: theme.spacing.unit * 1
  },
})

class HomeButton extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Button variant="contained" color="primary" className={classes.button} component={Link} to="/">
                Home
                <HomeOutlined className={classes.homeIcon} />
            </Button>
        )
    }
}

HomeButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (HomeButton);