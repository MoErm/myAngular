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
  $routeProvider.when('/about', {
    templateUrl: 'school/about.html',
    controller: 'AboutCtrl'
  });
  $routeProvider.when('/train', {
    templateUrl: 'school/train.html',
    controller: 'TrainCtrl'
  });
  $routeProvider.when('/sign', {
    templateUrl: 'school/sign.html',
    controller: 'SignCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
