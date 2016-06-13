'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.index',
  'myApp.school',
  'myApp.login',
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
  $routeProvider.otherwise({redirectTo: '/'});
}]);
