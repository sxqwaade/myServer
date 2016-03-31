
var index = require('./index');
var upload = require('../api/upload');
var spider = require('../api/spider');
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();
module.exports = function (app) {
    app.get('/excel2json', index.excel2json);
    app.get('/api/spider/searchSomething',spider.searchSomething);
    app.post('/api/excel2json',multipartyMiddleware,upload.excel2json);
};