'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
//定义路由
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
//数据初始化
  $scope.qty =28;
  $scope.cost =1321;
  $scope.msg ="ssssssssssssss";
  /* ajax请求
$http({
    method: 'get',
    url: "http://test.jiaxinmore.com/apps/api/demand/getUserRansomRecords",
    data:{
        page:1
    }
  }).success(function(data, status) {
    console.log(data.data)
    $scope.names=data.data.records
    // Now we have a list of the stories (data.list.story)
    // in the data object that the NPR API
    // returns in JSON that looks like:
    // data: { "list": {
    //   "title": ...
    //   "story": [
    //     { "id": ...
    //       "title": ...
  }).error(function(data, status) {
    // Some error occurred
  });
*/
  var updateClock = function() {    $scope.clock = new Date();  };
  var timer = setInterval(function() {    $scope.$apply(updateClock);  }, 1000);
  updateClock();

  $scope.names = function() {
    return $scope.firstName + " " + $scope.lastName;
  }

})
.filter("myUpperFilter", function() {
//自定义过滤
  return function(input) {
    return input.toUpperCase();
  }
})

.directive("runoobDirective", function() {
//自定义模块
  return {
    template : "<h1>自定义指令2!</h1>"
  };
})
.directive("myDctv", function() {
//自定义模块
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "red");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
    });
  }
});

