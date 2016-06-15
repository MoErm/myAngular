'use strict';

app.controller('SchoolCtrl', function($scope, $http) {
//测试数据

})
    .directive("schoolLogo", function() {
//自定义模块
      return {
          replace:true,
          template :'<div  class="school_title">' +
          '         <div class="school_logo"><img src="../images/school_logo.png"/></div>' +
          '         </div>'
      };
    })

