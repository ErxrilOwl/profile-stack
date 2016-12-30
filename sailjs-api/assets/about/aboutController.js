'use strict';

angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/aboutView.html',
            controller: 'aboutController'
        });
    }])

    .controller('aboutController', ['$scope', '$rootScope', '$log', '$http', 'BASEURL', 'USERID', '$sce',
        function($scope, $rootScope, $log, $http, BASEURL, USERID, $sce) {

            $log.info("About - Initializing");

            //load the about information
            $scope.showAboutLoader = true;
            $scope.showErrorMessage = false;

            $scope.aboutData = [];

            $http.get(BASEURL + "/api/user/" + USERID + "/about").then(function(response){
                $scope.aboutData = response.data;
                $scope.showAboutLoader = false;
                $scope.showErrorMessage = false;
                $rootScope.CondensedMode = false;
            },function(response){
                $log.error("About - There Was An Error Fetching The About Information");
                $log.error(response);
                $scope.showAboutLoader = false;
                $scope.showErrorMessage = true;
                $rootScope.CondensedMode = true;
            });

            $scope.renderHTML = function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            }


    }]);