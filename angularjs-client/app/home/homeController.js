'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/homeView.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', ['$scope', '$rootScope', '$http', '$log', 'BASEURL', 'USERID', 'GHOSTID', 'GHOSTSECRET',
        function($scope, $rootScope, $http, $log, BASEURL, USERID, GHOSTID, GHOSTSECRET) {

            console.log("Home - Initializing");


            /*ghost.init({
                clientId: GHOSTID,
                clientSecret: GHOSTSECRET
            });*/

            //console.log(ghost.url.api());

            var loaded = {
                projects: true,
                posts: true
            };


            $scope.projects = {
                data: null,
                showProjects: false,
                showProjectsSection: true,
                showProjectsLoader: true
            };

            $scope.posts = {
                data: null,
                showPosts: false,
                showPostsSection: true,
                showPostsLoader: true
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
                $scope.projects.showProjects = false;
                $scope.projects.showProjectsSection = false;


                loaded.projects = false;

                $rootScope.CondensedMode = true;

            }

            var onPostsSuccess = function(response){

                console.log("SUCCESS");
                console.log(response);

                $scope.posts.data = response.data.posts;

                $scope.posts.showPostsLoader = false;
                $scope.posts.showPosts = true;
                $scope.posts.showPostsSection = true;
            }

            var onPostsFailure = function(response){
                $log.error("Home - Failed To Fetch Posts");
                $log.error(response);

                $scope.posts.showProjectsLoader = false;
                $scope.posts.showProjects = false;
                $scope.posts.showProjectsSection = false;

                loaded.posts = false;

                $rootScope.CondensedMode = true;

            }


            //get recent projects
            //$http.get(BASEURL + "/api/user/" + USERID + "/project/3")
            //    .then(onProjectsSuccess, onProjectsFailure);

            //get recent posts
            //$http.get(ghost.url.api('posts', {limit:5})).then(onPostsSuccess, onPostsFailure);

    }]);