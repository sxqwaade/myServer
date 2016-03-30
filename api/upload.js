var express = require('express');
var path = require('path'),
    fs = require('fs'),
    excel2json = require('../bin/process');

var upload = function(){};

upload.prototype.excel2json = function(req,res){
    var file = req.files.file,
        time = req.files.time;

    fs.rename(file.path,"/opt/www/node_project/myServer/public/json/"+file.name,function(err){
        if(err){
            res.send(err);
        }else{
            excel2json.opengrunt();
            res.send({"filepath":"json/"+file.name});
        }
    });

};

module.exports = new upload();
