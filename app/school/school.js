'use strict';

app.controller('SchoolCtrl', function($scope, $http) {
//测试数据

})
    .directive("schoolMenu", function() {
//自定义模块
      return {
          replace:true,
          template :'<div  class="school_title">' +
          '         <div class="school_logo"><img src="../images/logo3.png"/></div>' +
          '            <div class="school_menu">' +
          '            <a href="#/">首页</a>' +
          '            <a>学院介绍</a>' +
          '            <a>培训课程</a>' +
          '            <a  href="#/sign/4321">立即报名</a>' +
          '            </div>' +
          '         </div>'
      };
    })

