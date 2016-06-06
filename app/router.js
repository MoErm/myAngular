/**
 * Created by Administrator on 2016/6/6.
 */
define(['angular', 'require', 'angular-route'], function (angular, require) {

    var app = angular.module('webapp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {
            $routeProvider.
            when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl',
                resolve: {
                    /*
                     这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                     对应controller写法（注意keyName）：
                     controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                     function($scope, $http, keyName) {
                     }]);
                     */
                    keyName: function ($q) {
                        var deferred = $q.defer();
                        require(['view1/view1.js'], function (controller) {
                            $controllerProvider.register('View1Ctrl', controller);      //由于是动态加载的controller，所以要先注册，再使用
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            when('/view2', {
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl',
                resolve: {
                    /*
                     这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                     对应controller写法（注意keyName）：
                     controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                     function($scope, $http, keyName) {
                     }]);
                     */
                    keyName: function ($q) {
                        var deferred = $q.defer();
                        require(['view2/view2.js'], function (controller) {
                            $controllerProvider.register('View2Ctrl', controller);      //由于是动态加载的controller，所以要先注册，再使用
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            }).
            otherwise({
                redirectTo: '/view1'      //angular就喜欢斜杠开头
            });
        }]);

    return app;
});