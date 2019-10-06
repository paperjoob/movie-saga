const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET Request
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies" ORDER BY "id";';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movies query', err);
        res.sendStatus(500);
      });
  }); // end router.get for movies

// GET Request to display Details
router.get('/details/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE id = $1`;
    pool.query(queryText, [req.params.id])
    .then( (result) => { res.send(result.rows); })
    .catch( (error) => {
        console.log('Error in getting details', error);
        res.sendStatus(500);
    })
}); // end router.get for Details

// GET GENRES REQUEST
router.get('/genres/:id', (req, res) => {
  const queryText = `SELECT "movies".id, "genres".name from "movie_genre" JOIN "movies" ON "movies".id = "movie_genre".movies_id JOIN "genres" ON "genres".id = "movie_genre".genres_id WHERE "movies".id = $1`;
  pool.query(queryText, [req.params.id])
  .then( (result) => { res.send(result.rows); })
  .catch( (error) => {
      console.log('--- ERROR IN GET GENRES SERVER', error);
      res.sendStatus(500);
  })
}); // end router.get for Details

module.exports = router;