'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  });
  $routeProvider.when('/school', {
    templateUrl: 'school/school.html',
    controller: 'SchoolCtrl'
  });
  $routeProvider.when('/login', {
    templateUrl: 'school/login.html',
    controller: 'LoginCtrl'
  });
  $routeProvider.when('/sign/:id', {
    templateUrl: 'school/sign.html',
    controller: 'SignCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
