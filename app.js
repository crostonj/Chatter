var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = 4000;

var chatRouter = require('./src/routes/chatRoutes')();
var rootRouter = require('./src/routes/rootRoutes')();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(chatRouter);
app.use(rootRouter);
routes.initialize(app);



app.use(cookieParser());
app.use(session({
    secret: 'Croston',
    resave: true,
    saveUninitialized: true
}));






app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
