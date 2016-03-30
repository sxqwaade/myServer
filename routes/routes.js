
var index = require('./index');
var upload = require('../api/upload');
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();
module.exports = function (app) {
    app.get('/excel2json', index.excel2json);
    app.post('/api/excel2json',multipartyMiddleware,upload.excel2json);
};