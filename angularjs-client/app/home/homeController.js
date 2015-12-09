'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', ['$scope', '$http', '$log', 'BASEURL', function($scope, $http, $log, BASEURL) {

        $scope.displayHome = true;
        $scope.showProjects = false;
        $scope.showProjectsLoader = true;
        $scope.showPosts = false;
        $scope.showPostSection = false;

        var onSuccess = function(response){
            //alert("Response");
            $scope.projects = response.data;
            $scope.showProjectsLoader = false;
            $scope.showProjects = true;
        }

        var onFailure = function(response){
            $log.error("Home - Error Fetching Projects");
            $log.error(response);

            //collapse logic
            $scope.showProjectsLoader = false;

        }


        $http.get(BASEURL + "/api/user/1/project/3")
            .then(onSuccess, onFailure);
    }]);