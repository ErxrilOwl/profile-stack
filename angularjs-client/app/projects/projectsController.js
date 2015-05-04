'use strict';

angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projectsView.html',
            controller: 'projectsController'
        });
    }])

    .controller('projectsController', ['$scope','$http',function($scope, $http) {

        var onSuccess = function(response){
            //alert("SUCCESS: " + JSON.stringify(response));
            var data = response.data;
            //alert(JSON.stringify(data));
            var formattedProjects = formatProjects(data);
            //alert(JSON.stringify(formattedProjects));
            $scope.projects = response.data;
            $scope.projectsCollection = formattedProjects;

        }

        var onFailure = function(response){
            alert("ERROR: " + JSON.stringify(response));
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

        $http.get("http://localhost:1337/api/project")
            .then(onSuccess, onFailure);
    }]);
