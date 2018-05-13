const express = require('express');
const pool = require('../modules/pool');
const shopInfoRouter = express.Router();


shopInfoRouter.get('/', (req, res) => {
    const queryText = `SELECT * from "shopinformation"`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((error) => {
        console.log('error getting shop info')
        res.sendStatus(500)
    })//end catch
})//end get

module.exports = shopInfoRouter;