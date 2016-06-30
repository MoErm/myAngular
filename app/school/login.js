'use strict';

app.controller('LoginCtrl', function($scope, $http) {

})    .directive("loginLogo", function() {
//自定义模块
    return {
        replace:true,
        template :'<div style="border-bottom: 2px solid black"><div  class="school_title" >' +
        '         <div class="school_logo"><img src="./images/logo3.png"/></div>' +
        '         <div class="school_login_menu">' +
        '          <a href="/school/index">前往家策商学院>></a>' +
        '            </div>'+
        '         </div></div>'

    };
})


