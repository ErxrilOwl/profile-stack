'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contactView.html',
            controller: 'contactController'
        });
    }])

    .controller('contactController', [function() {

    }]);