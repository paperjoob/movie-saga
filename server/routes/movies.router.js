const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET Request
router.get('/', (req, res) => {
    const queryText = 'SELECT id, title, poster FROM "movies";';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movies query', err);
        res.sendStatus(500);
      });
  }); // end router.get for movies

// GET Request to display Details
router.get('/details:id', (req, res) => {
    const queryText = `SELECT movies.title, description, genres.name from "movie_genre"
    JOIN "movies" ON "movies".id = "movie_genre".movies_id
    JOIN "genres" ON "genres".id = "movie_genre".genres_id;`;
    pool.query(queryText, [req.params.id])
    .then( (result) => { res.send(result.rows); })
    .catch( (error) => {
        console.log('Error in getting details', error);
        res.sendStatus(500);
    })
}); // end router.get for Details

module.exports = router;