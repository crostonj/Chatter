var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');

var app = express();
var port = 2000;

var chatRouter = require('./src/routes/chatRoutes')();
var rootRouter = require('./src/routes/rootRoutes')();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'Croston',
    resave: true,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

//Routes

//app.get('/', function(req, res) {
//    res.send('Hello World!')
//})

app.use('/', chatRouter.route);
app.use('/chat', rootRouter.route);
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

//Start Server
app.listen(port, function(err) {
    console.log('running server on port ' + port);
});