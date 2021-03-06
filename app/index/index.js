'use strict';

app.controller('IndexCtrl', function($scope, $http) {
//数据初始化


  $(".index_tab>ul>li").on("mouseover ",function(event){
    var num=event.currentTarget.dataset.tab
    $(".cur").removeClass("cur")
    $("#tab_"+num).addClass("cur")
    $(".index_info>ul>li").hide()
    $("#tab_text_"+num).removeClass("hidden")
    $("#tab_text_"+num).show()
  })
      var mySwiper = new Swiper('.swiper-container',{
        loop: true,
        autoplay: 3000,
      });

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
    template : '<div class="school_container"><div class="index_title"><div class="index_logo"></div>' +
    '          <div class="index_login">' +
    '          <a class="index_login_btn" href="/">首页</a>' +
    '          <a class="login_school" href="/school/index">家策商学院</a>' +
    '          </div>' +
    '<a href="/user/login" class="index_login_btn2">登录</a>' +
    '          </div></div>'
  };
})
.directive("clear",function(){
  return {
    replace:true,
    template:'<div class="clear"></div>'
  }
}).directive("footDiv", function() {
//自定义模块
  return {
    template : '<div class="footer">' +
    '<p>© 2016 jiacer.com</p>' +
    '上海市徐汇区凯旋路3500号华苑大厦1座19楼A室&ensp;&ensp;&ensp;<a href="http://www.miibeian.gov.cn/?tp=1.0.20.0.17.KcvSgN6" target="_blank" style="color:#fff;">沪ICP备16022947号-1</a></div>'
  };
})


