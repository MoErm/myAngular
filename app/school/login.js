'use strict';

angular.module('myApp.login', ['ngRoute','myApp.index'])
.controller('LoginCtrl', function($scope, $http) {
 $("#login_btn").on("click",function(){
     console.log("denglu")
 })


})


