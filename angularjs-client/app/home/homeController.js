'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', ['$scope', '$http', function($scope, $http) {

        $scope.displayHome = true;

        var onSuccess = function(response){
            $scope.projects = response.data;
        }

        var onFailure = function(response){
            alert("ERROR: " + JSON.stringify(response));
        }


        $http.get("http://localhost:1337/api/user/553d7d4f1e38d2e52941420c/project/3")
            .then(onSuccess, onFailure);
    }]);