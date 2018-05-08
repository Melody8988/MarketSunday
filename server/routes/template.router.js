const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET existing products from postgreSQL
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "galleryitems" ORDER BY "id" ASC;`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((error) => {
        console.log('error getting products')
        res.sendStatus(500)
    })//end catch
})//end get

//UPDATE existing product TITLE and DESCRIPTION from postgreSQL
router.put('/:id', (req, res) => {
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

//POST new IMAGE via filestack to postgreSQL
router.post('/', (req, res) => {
    const productImage = req.body;
    const queryText = `INSERT INTO "galleryitems" ("title", "image_url", "description") VALUES ($1, $2, $3);`
    pool.query(queryText, [productImage.title, productImage.image_url, productImage.description]).then((response) => {
        console.log('Successfully added new image to db!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error posting new image:', error);
        res.sendStatus(500);
    })
});

//DELETE image from postgreSQL
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    const queryText = `DELETE FROM "galleryitems" WHERE "id" = $1;`
    pool.query(queryText, [productId]).then((response) => {
        console.log(response);
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
    });//end catch
});//end delete

module.exports = router;