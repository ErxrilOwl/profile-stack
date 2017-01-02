'use strict';

angular.module('myApp.manager', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/manager', {
            templateUrl: 'manager/managerView.html',
            controller: 'managerController'
        });
    }])

    .controller('managerController', ['$scope', '$rootScope', '$http', '$log', 'BASEURL', 'USERID',
        function($scope, $rootScope, $http, $log, BASEURL, USERID) {

            console.log("Manager - Initializing");


            $scope.showLoginPartial = true;
            $scope.showEditorPartial = false;




        }]);