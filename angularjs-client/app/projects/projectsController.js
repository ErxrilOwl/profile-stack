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
            $scope.projects = response.data;
        }

        var onFailure = function(response){
            alert("ERROR: " + JSON.stringify(response));
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

        $http.get("http://localhost:1337/api/project")
            .then(onSuccess, onFailure);
    }]);
