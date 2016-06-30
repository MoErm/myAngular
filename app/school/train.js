'use strict';

app.controller('TrainCtrl', function($scope, $routeParams, $location,$http) {
    $scope.changTab=function(index){
        console.log(index)
        $scope.index=index
        $scope.contact=$scope.jobs[$scope.index].contact
        $scope.records=$scope.jobs[$scope.index].records
    }
    $scope.index=$routeParams.job-1;
    $http({
        method: 'get',
        url: "http://"+window.location.host+"/testData/train.json",
        //url: "http://"+window.location.host+"/testData/train.json",
    }).success(function(data, status) {
        $scope.jobs=data.data
        $scope.contact=$scope.jobs[$scope.index].contact
        $scope.records=$scope.jobs[$scope.index].records


    }).error(function(data, status) {
        // Some error occurred
    });


}).filter("myFilter", function() {
//自定义过滤
    return function(input,index) {
        if(input== index){
            return "link_selected"
        }else{
            return ""
        }

    }
})



