const express = require('express');
const pool = require('../modules/pool');
const responsesRouter = express.Router();

//GET existing products from postgreSQL
responsesRouter.get('/', (req, res) => {
    const queryText = `SELECT "viewermessages"."id", 
    "viewermessages"."date", 
    "viewermessages"."name", 
    "viewermessages"."email", 
    "viewermessages"."message", 
    "viewermessages"."resolved", 
    "galleryitems"."id", 
    "galleryitems"."title" 
    FROM "viewermessages" 
    JOIN "galleryitems" 
    ON "galleryitems"."id" = "viewermessages"."galleryitems_id";`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((error) => {
        console.log('error getting messages')
        res.sendStatus(500)
    })//end catch
})//end get

module.exports = responsesRouter;