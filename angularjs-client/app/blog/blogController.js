'use strict';

angular.module('myApp.blog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/blogView.html',
            controller: 'blogController'
        });
    }])

    .controller('blogController', [function() {

    }]);
