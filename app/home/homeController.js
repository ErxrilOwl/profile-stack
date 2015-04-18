'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', [function() {

    }]);