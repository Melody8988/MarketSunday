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

//UPDATE existing product TITLE and DESCRIPTION from postgreSQL
router.put('/:id', (req, res)=>{
    console.log('update title', req.body, req.params);
    const productTitle = req.body.title;
    const productDescription = req.body.description
    const productId = req.params.id;
    const queryText = `UPDATE "galleryitems" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    pool.query(queryText, [productTitle, productDescription, productId])
        .then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error updating title', error);
            res.sendStatus(500);
        });//end catch
});//end put

// //UPDATE existing product DESCRIPTION from postgreSQL
// router.put('/:id', (req, res)=>{
//     console.log('update description', req.body, req.params);
//     const productDescription = req.body.description;
//     const descriptionId = req.params.id;
//     const queryText = `UPDATE "galleryitems" SET "description" = $1 WHERE "id" = $2;`;
//     pool.query(queryText, [productDescription, descriptionId])
//         .then((response) => {
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('error updating description', error);
//             res.sendStatus(500);
//         });//end catch
// });//end put

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;