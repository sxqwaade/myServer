var express = require('express');
var router = express.Router();

/* GET home page. */
router.index = function(req,res){
    res.render('index', { title: '' });
};
router.excel2json = function(req,res){
    res.render('excel2json', { title: 'excel2json' });
}
module.exports = router;