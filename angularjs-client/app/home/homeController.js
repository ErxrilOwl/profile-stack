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


            ghost.init({
                clientId: "ghost-frontend",
                clientSecret: "b553a3fe8571"
            });

            console.log(ghost.url.api());




            $scope.projects = {
                data: null,
                showProjects: false,
                showProjectsSection: true,
                showProjectsLoader: true
            };

            $scope.posts = {
                data: null,
                showPosts: false,
                showPostsSection: false,
                showPostsLoader: false
            };

            $scope.displayHome = true;


            var onProjectsSuccess = function(response){
                //alert("Response");
                $scope.projects.data = response.data;
                $scope.projects.showProjectsLoader = false;
                $scope.projects.showProjects = true;
                $scope.projects.showProjectsSection = true;

                $rootScope.CondensedMode = false;
            }

            var onProjectsFailure = function(response){
                $log.error("Home - Error Fetching Projects");
                $log.error(response);

                //collapse logic
                $scope.projects.showProjectsLoader = false;
                $rootScope.CondensedMode = true;

                $scope.projects.showProjects = false;
                $scope.projects.showProjectsSection = false;

            }

            var onPostsSuccess = function(response){
                console.log("SUCCESS");
                console.log(response);
            }

            var onPostsFailure = function(response){
                console.log("FAILURE");
                console.log(response);
            }


            $http.get(BASEURL + "/api/user/" + USERID + "/project/3")
                .then(onProjectsSuccess, onProjectsFailure);


            $http.get(ghost.url.api('posts', {limit:3})).then(onPostsSuccess, onPostsFailure);

    }]);