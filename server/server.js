const express = require('express');
require('dotenv').config();

//Requirements
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Required Routes
const userRouter = require('./routes/user.router');
const templateRouter = require('./routes/template.router')
const responsesRouter = require('./routes/responses.router')
const shopInfoRouter = require('./routes/shopInfo.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);
// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/shop', templateRouter);
app.use('/api/responses', responsesRouter);
app.use('/api/shopInfo', shopInfoRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
