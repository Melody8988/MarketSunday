const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET existing products from postgreSQL
router.get('/', (req, res) => {
    // const currentDescriptions = req.query.id;
    const queryText = `SELECT * from "galleryitems"`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((error) => {
        console.log('error getting products')
        res.sendStatus(500)
    })//end catch
})//end get

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;