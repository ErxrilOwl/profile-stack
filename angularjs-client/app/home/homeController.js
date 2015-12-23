'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', ['$scope', '$rootScope', '$http', '$log', 'BASEURL', 'USERID',
        function($scope, $rootScope, $http, $log, BASEURL, USERID) {

            console.log("Home - Initializing");

        $scope.displayHome = true;
        $scope.showProjects = false;
        $scope.showProjectsSection = true;
        $scope.showProjectsLoader = true;
        $scope.showPosts = false;
        $scope.showPostSection = false;

        var onSuccess = function(response){
            //alert("Response");
            $scope.projects = response.data;
            $scope.showProjectsLoader = false;
            $scope.showProjects = true;

            $rootScope.CondensedMode = false;
        }

        var onFailure = function(response){
            $log.error("Home - Error Fetching Projects");
            $log.error(response);

            //collapse logic
            $scope.showProjectsLoader = false;
            $rootScope.CondensedMode = true;

            $scope.showProjects = false;
            $scope.showProjectsSection = false;

        }


        $http.get(BASEURL + "/api/user/" + USERID + "/project/3")
            .then(onSuccess, onFailure);
    }]);