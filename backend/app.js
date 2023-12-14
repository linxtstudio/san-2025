require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')

const authRouter = require('./routes/auth.route')
const eventRouter = require('./routes/event.route')
const eventTypeRouter = require('./routes/event.type.route')
const generalRouter = require('./routes/general.route')
const regionRouter = require('./routes/region.route')

const sequelize = require('./utils/db/sequelize.util')

sequelize.authenticate().then(() => console.log('db connected'))

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', generalRouter)
app.use('/auth', authRouter)
app.use('/event', eventRouter)
app.use('/event/types', eventTypeRouter)
app.use('/region', regionRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.log(req.app.get('env'))
  res.json({
    status: err.status || 500,
    message: err.message,
    error: req.app.get('env') === 'development' ? err : null,
  });
});

module.exports = app;
