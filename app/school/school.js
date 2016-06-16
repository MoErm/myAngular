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
    .directive("schoolMenu", function() {
//自定义模块
        return {
            replace:true,
            template :'<div class="school_menu">' +
            '            <div class="school_menu_box">' +
            '            <a class="sel">首页</a' +
            '            ><a>学院介绍</a' +
            '            ><a>培训课程</a' +
            '            ><a>立即报名</a>' +
            '            </div>' +
            '            </div>'
        };
    })
    .directive("schoolLoginMenu", function() {
//自定义模块
      return {
          replace:true,
          template :'<div class="school_login_menu">' +
          '          <a class="tab_login">登录</a' +
          '          ><a class="tab_sign">注册</a' +
          '            ><a class="tab_phone">手机版</a' +
          '            ><a class="tab_help">帮助中心</a' +
          '            ><a class="tab_wei"><img src="../images/school_wei.png"></a' +
          '            ><a class="tab_qq"><img src="../images/school_qq.png"></a>' +
          '            </div>'
      };
    })

