import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('GRAB_DETAILS', grabDetails);
}

// Generator Function to FETCH MOVIES from server
function* fetchMovies() {
    try{
        const response = yield axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data})
    } catch (error) {
        console.log('Error while fetching movies', error);
    }
}

// Generator Function to Grab Details from Server
function* grabDetails() {
    try{
        const response = yield axios.get(`/api/plant/details/${action.payload}`);
        yield put( {type: 'GRAB_MOVIE_DETAILS', payload: response.data} );
    } catch (error) {
        console.log('Error grabbing details', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const setMovies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GRAB_MOVIE_DETAILS':
            console.log('state', state, 'payload', action.payload);
            return action.payload;
        default:
            return state;
    }
} // end detailsReducer

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        setMovies,
        genres,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
