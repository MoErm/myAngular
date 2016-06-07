'use strict';

angular.module('myApp.view2', ['ngRoute','myApp.index'])
.controller('View2Ctrl', function($scope) {
//测试数据


})
    .directive("fullDiv", function() {
//自定义模块
      return {
          replace:true,
          template : "<h1>自定义指令2!</h1>"
      };
    })

