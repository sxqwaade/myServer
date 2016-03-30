var app = angular.module('fileUpload',['ngFileUpload']);

app.controller('MyCtrl',['$scope','Upload','$timeout','$http',function($scope,Upload,$timeout,$http){
    $scope.filesName = [];
    $scope.filesPath = [];
    $scope.uploadFiles = function(files,errFiles){
        $scope.files = files;
        $scope.errFiles = errFiles;

        $scope.uploadTime = new Date().getTime();
        angular.forEach(files,function(file){
            $scope.filesPath.push("/json/"+file.name.replace("xlsx","json"));
            file.upload = Upload.upload({
                url:'/api/excel2json',
                data:{file:file,time:$scope.uploadTime}
            });

            file.upload.then(function(response){
                $timeout(function(){
                    file.result = response.data;
                });
                $scope.filesName.push(file.name);
            },function(response){

                if(response.status > 0){
                    $scope.errorMsg = response.status + ':' +response.data;
                }
            },function(evt){
                //file.progress = Math.min(100,parseInt(100.0*evt.loaded/evt.total));
            });
        });
    };

}]);