import React from 'react';
import NewMoviesForm from '../NewMoviesForm/NewMoviesForm';
import MoviesList from '../MoviesList/MoviesList';

const Movies = props => (
    <div className = "moviesWrap">
        <div className="NewMoviesForm"><NewMoviesForm /></div>
        <div className="NewMoviesForm"><MoviesList /></div>
    </div>
)

export default Movies;