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

            //load the about information
            $scope.showAboutLoader = true;

            $scope.aboutData = [];

            $http.get(BASEURL + "/api/user/" + USERID + "/about").then(function(response){
                $log.info("SUCCESS");
                $log.info(response);
                $scope.aboutData = response.data;
                $scope.showAboutLoader = false;
            },function(response){
                $log.error("About - There Was An Error Fetching The About Information");
                $log.error(response);
                $scope.showAboutLoader = false;
            });

            $scope.renderHTML = function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            }


    }]);