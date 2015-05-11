'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', ['$scope', '$http', 'BASEURL', function($scope, $http, BASEURL) {

        $scope.displayHome = true;
        $scope.showProjects = false;
        $scope.showPosts = false;
        $scope.showPostSection = false;

        var onSuccess = function(response){
            //alert("Response");
            $scope.projects = response.data;
            $scope.showProjects = true;
        }

        var onFailure = function(response){
            alert("ERROR: " + JSON.stringify(response));
        }


        $http.get(BASEURL + "/api/user/553d7d4f1e38d2e52941420c/project/3")
            .then(onSuccess, onFailure);
    }]);