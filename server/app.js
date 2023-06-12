//helps to handle http-errors
import createError from 'http-errors'
// Import the Express Library
import express from 'express';
// Is a Core-Node library to manage system paths
import path from 'path'
//Helps to parse client cookies
import cookieParser from 'cookie-parser';
// Library to log http communication
import logger from'morgan';


import indexRouter from '@server/routes/index' 
import usersRouter from '@server/routes/users';
import apiRouter from '@server/routes/api';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Log all received requests
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
