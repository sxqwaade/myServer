var process = require('child_process');

var status = 0;
//调用执行文件
exports.opengrunt = function(){
    process.execFile('grunt', ['excel_vocabulary'],
        function (error,stdout,stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return false
            }
            status = 1;
            console.log(stdout);
        });

};

exports.watchtask = function(){
    return status;
}

exports.shutdown = function(){
    status = 0;
}