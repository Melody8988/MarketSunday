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

//UPDATE existing product title from postgreSQL
router.put('/:id', (req, res)=>{
    console.log('update title', req.body, req.params);
    const productTitle = req.body;
    const titleId = req.params.id;
    const queryText = `UPDATE "galleryitems" SET "title" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [productTitle.title, titleId])
        .then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error updating title', error);
            res.sendStatus(500);
        });//end catch
});//end put

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;