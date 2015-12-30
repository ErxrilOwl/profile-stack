'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/aboutView.html',
            controller: 'aboutController'
        });
    }])

    .controller('aboutController', [function() {

    }]);