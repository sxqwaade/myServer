var express = require('express')
    , routes = require('./routes/routes')
    , morgan = require('morgan')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , serveStatic = require('serve-static')
    , fs = require('fs');

var app = express();
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(favicon());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser('your secret here'));
app.use(session());
//app.use(app.router);
app.use(serveStatic(__dirname+'/public/'));

// development only
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});