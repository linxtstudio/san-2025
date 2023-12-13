require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const generalRouter = require('./routes/general.route.');
const authRouter = require('./routes/auth.route');

const sequelize = require('./utils/db/sequelize.util')

sequelize.authenticate().then(() => console.log('db connected'))

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', generalRouter);
app.use('/auth', authRouter);

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
