'use strict';

app.controller('SignCtrl', function($scope, $routeParams, $location,$http) {
    $http({
        method: 'get',
        url:  "http://"+window.location.host+"/testData/train.json",
        //url: "http://"+window.location.host+"/testData/train.json",
    }).success(function(data, status) {
        $scope.jobs=data.data



    }).error(function(data, status) {
        // Some error occurred
    });
})



