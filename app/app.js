'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index/index.html',
    controller: 'IndexCtrl'
  }).when('/school/index', {
    templateUrl: 'school/school.html',
    controller: 'SchoolCtrl'
  }).when('/user/login', {
    templateUrl: 'school/login.html',
    controller: 'LoginCtrl'
  }).when('/school/about', {
    templateUrl: 'school/about.html',
    controller: 'AboutCtrl'
  }).when('/school/train/:job', {
    templateUrl: 'school/train.html',
    controller: 'TrainCtrl'
  }).when('/school/sign', {
    templateUrl: 'school/sign.html',
    controller: 'SignCtrl'
  }).otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
