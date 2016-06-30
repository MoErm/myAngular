'use strict';

app.controller('SchoolCtrl', function($scope, $http) {
//测试数据
    $(".school_env>div>img").on("click",function(){
        window.location.href="/school/about"
    })
    $(".school_img_1").on("click",function(){
        window.location.href="/school/train/2"
    })
    $(".school_img_2").on("click",function(){
        window.location.href="/school/train/4"
    })
    $(".school_img_3").on("click",function(){
        window.location.href="/school/train/5"
    })
    $(".school_img_4").on("click",function(){
        window.location.href="/school/train/1"
    })
    $(".school_img_5").on("click",function(){
        window.location.href="/school/train/3"
    })
    })
    .directive("schoolLogo", function() {
//自定义模块
      return {
          replace:true,
          template :'<div  class="school_title">' +
          '         <div class="school_logo"><img src="./images/school_logo.png"/></div>' +
          '         <div class="school_login_menu">' +
        '          <a class="tab_login" href="/user/login">登录</a' +
        '          ><a class="tab_wei" ><img src="./images/school_wei.png">官方微信</a' +
        '            ><a class="tab_jiace" style="margin-left: 10px; " href="/">前往家策联盟>></a><div class="twoCode"><img src="./images/twoCode.jpg"></div>' +
        '            </div>' +
          '         </div>',
          controller:function($scope){
              $(".tab_wei").on("mouseover",function(){
                 $(".twoCode").css("display","block")
              }).on("mouseout",function(){
                  $(".twoCode").css("display","none")
              })
          }
      };
    })
    .directive("schoolMenu", function() {
//自定义模块
        return {
            replace:true,
            template :'<div class="school_menu">' +
            '            <div class="school_menu_box">' +
            '            <a class="{{index}}" href="/school/index">首页</a' +
            '            ><a class="{{about}}" href="/school/about">学院介绍</a' +
            '            ><a class="{{train}}" href="/school/train/1">培训课程</a' +
            '            ><a class="{{bao}}" href="/school/sign">立即报名</a>' +
            '            </div>' +
            '            </div>',
            scope:{
                index:'@index',
                about:"@about",
                train:"@train",
                bao:"@bao",

            }
        };
    })
    .directive("schoolLoginMenu", function() {
//自定义模块
      return {
          replace:true,
          template :'<div class="school_login_menu">' +
          '          <a class="tab_login" href="/user/login">登录</a' +
          '          ><a class="tab_sign" href="/school/sign">注册</a' +
          '            ><a class="tab_phone">手机版</a' +
          '            ><a class="tab_help">帮助中心</a' +
          '            ><a class="tab_wei"><img src="./images/school_wei.png"></a' +
          '            ><a class="tab_qq"><img src="./images/school_qq.png"></a>' +
          '            </div>'
      };
    })

