'use strict';

angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projectsView.html',
            controller: 'projectsController'
        });
    }])

    .controller('projectsController', ['$scope','$rootScope', '$http', '$log', 'BASEURL',
        function($scope, $rootScope, $http, $log, BASEURL) {

        $scope.showProjects = false;
        $scope.showProjectsLoader = true;

        $scope.showErrorMessage = false;

        var onSuccess = function(response){
            var data = response.data;
            var formattedProjects = formatProjects(data);

            $scope.projects = response.data;
            $scope.projectsCollection = formattedProjects;
            $scope.showProjects = true;

            $rootScope.CondensedMode = false;
            $scope.showProjectsLoader = false;

        }

        var onFailure = function(response){
            $log.error("Projects - There was an error fetching projects");
            $log.error(response);

            $scope.showProjectsLoader = false;
            $scope.showErrorMessage = true;

            $rootScope.CondensedMode = true;


        }

        var formatProjects = function(projects){
            var formattedProjectsArray = new Array();
            for(var i = 0; i < projects.length; i++){
                var projectRowArray = new Array();
                for(var j = 0; j < 2; j++){
                    if(projects[(2*i) + j] != null){
                        projectRowArray.push(projects[(2*i) + j]);
                    }

                }
                formattedProjectsArray.push(projectRowArray);
            }

            return formattedProjectsArray;
        }

        $scope.formatLanguages = function(langArray){
            //alert("Format Method: " + langArray);
            var languageString = "";
            for(var i = 0; i < langArray.length; i++){
                //alert("Adding language: " + langArray[i]);
                languageString += langArray[i] + " | "
            }
            //alert("final string: " + languageString);
            return languageString.substr(0, languageString.length - 3)
        }

        $scope.shouldBeNewRow = function(index){
            if(index % 2 == 0){
                return true;
            }else{
                return false;
            }
        }

        //need if for whether we have an API or not
        $http.get(BASEURL + "/api/project")
            .then(onSuccess, onFailure);
    }]);
