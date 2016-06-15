'use strict';

app.controller('IndexCtrl', function($scope, $http) {
//数据初始化
  var mySwiper = new Swiper('.swiper-container',{
    loop: true,
    autoplay: 3000,
  });
  $scope.tabChange=function(num){
    $(".cur").removeClass("cur")
    $("#tab_"+num).addClass("cur")
    $(".index_info>ul>li").hide()
    $("#tab_text_"+num).removeClass("hidden")
    $("#tab_text_"+num).show()
  }

  $http({
    method: 'get',
    url: " http://localhost:3000/testData/test1.json",
    //data:{
    //  page:1
    //}
  }).success(function(data, status) {
    console.log(data.a)
    //$scope.names=data.data.records
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
.directive("titleDiv", function() {
//自定义模块
  return {
    template : '<div class="index_title"><div class="index_logo"></div>' +
    '          <div class="index_login">' +
    '          <a class="index_login_btn" href="#/">首页</a>' +
    '          <a class="login_school" href="#/school">家策商学院</a>' +
    '          </div>' +
    '<a href="#/login" class="index_login_btn2">登录</a>' +
    '          </div>'
  };
})
.directive("clear",function(){
  return {
    replace:true,
    template:'<div class="clear"></div>'
  }
});

