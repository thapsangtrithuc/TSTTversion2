var createError = require('http-errors');
var express = require('express');
var path = require('path');

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userRoute');
var questionRouter = require('./routes/questionRoute');
var historyRouter = require('./routes/historyRoute');
var socketIO = require('socket.io');

// Socket io setup
var app = express();
var io = socketIO();
app.io = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/question', questionRouter);
app.use('/api/history', historyRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// Socket io handler
io.on('connection', function (socket) {
  console.log('a user connected');

  // Nhận đáp án từ các thí sinh
  socket.on('submitAnswer', (answer) => {

  })


  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});





// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
