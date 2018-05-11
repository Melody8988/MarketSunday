const express = require('express');
const pool = require('../modules/pool');
const shopInfoRouter = express.Router();

////UPDATE existing shop SHOP NAME, OWNER NAME, SHOP DESCRIPTION
// shopInfoRouter.put('/:id', (req, res) => {
//     console.log('update shop information', req.body, req.params);
//     const shopName = req.body.shopName;
//     const ownerName = req.body.ownerName;
//     const shopDescription = req.body.shopDescription
//     const shopId = req.params.id;
//     const queryText = `UPDATE "shopinformation" SET "shop_name" = $1, "ownername" = $2, "phrase" = $3 WHERE "username" = $4;`;
//     pool.query(queryText, [shopName, ownerName, shopDescription, shopId])
//         .then((response) => {
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('error updating shop', error);
//             res.sendStatus(500);
//         });//end catch
// });//end put

responsesRouter.get('/', (req, res) => {
    const queryText = `SELECT * from "shopinformation" WHERE "username" =$1;`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((error) => {
        console.log('error getting messages')
        res.sendStatus(500)
    })//end catch
})//end get

module.exports = shopInfoRouter;