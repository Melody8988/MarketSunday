const express = require('express');
const pool = require('../modules/pool');
const responsesRouter = express.Router();

//GET all existing messages and the cooresponding information 
responsesRouter.get('/', (req, res) => {
    const queryText = `SELECT 
    "viewermessages"."id", 
    "viewermessages"."date", 
    "viewermessages"."name", 
    "viewermessages"."email", 
    "viewermessages"."message", 
    "viewermessages"."resolved", 
    "viewermessages"."galleryitems_id", 
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

//POST new message as a viewer which will show up in ResponsesPage for shop owner
responsesRouter.post('/', (req, res) => {
    const newMessage = req.body;
    const queryText = `INSERT into viewermessages ("name", "email", "message", "galleryitems_id") 
                       VALUES ($1, $2, $3, $4 );`
    pool.query(queryText, [newMessage.name, newMessage.email, newMessage.message, newMessage.galleryitems_id]).then((response) => {
        console.log('Successfully added new response');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error posting new response:', error);
        res.sendStatus(500);
    })
})

//DELETE a viewer's message from ResponsesPage as an owner
responsesRouter.delete('/:id', (req, res) => {
    const messageId = req.params.id;
    const queryText = `DELETE FROM "viewermessages" WHERE "id" = $1;`
    pool.query(queryText, [messageId]).then((response) => {
        console.log(response);
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
    });//end catch
});//end delete

//UPDATE a viewer's message as either resolved or not
responsesRouter.put('/:id', (req, res) => {
    console.log('update viewer message resolve status', req.body, req.params);
    const resolveStatus = req.body.resolved;
    const messageId = req.params.id;
    const queryText = `UPDATE viewermessages SET "resolved" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [resolveStatus, messageId])
        .then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error updating status', error);
            res.sendStatus(500);
        });//end catch
});//end put

module.exports = responsesRouter;