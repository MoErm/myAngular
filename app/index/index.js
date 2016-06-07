'use strict';

angular.module('myApp.index', ['ngRoute'])
.controller('IndexCtrl', function($scope, $http) {
//数据初始化
  var mySwiper = new Swiper('.swiper-container',{
    loop: true,
    autoplay: 3000,
  });

  $(function () {
    $("ul.bh >li").hover(function () {
      $("ul.bh >li.aq1").removeClass("aq1").addClass("aq");

      $("div.nr >div.ms").hide();
      $("ul.bh >li.li1").removeClass("li1");
      $(this).addClass("li1");

      if ($(this).hasClass("aq")) {
        $("div.nr >div.nr_aq").show();
      }
      if ($(this).hasClass("jk")) {
        $("div.nr >div.nr_jk").show();
      }
      if ($(this).hasClass("px")) {
        $("div.nr >div.nr_px").show();
      }
      if ($(this).hasClass("bx")) {
        $("div.nr >div.nr_bx").show();
      }
    });

    $(".btn_yy").click(function () {
      window.location = GlobalHref.Reservation();
    });
  });

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
    .directive("titleDiv", function() {
//自定义模块
      return {
        template : '<div class="index_title"><div class="index_logo"></div>' +
        '          <div class="index_login">' +
        '          <a class="index_login_btn" href="#/">首页</a>' +
        '          <a class="index_login_btn" href="#/view2">家策商学院</a>' +
        '          </div>' +
        '          </div>'
      };
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

