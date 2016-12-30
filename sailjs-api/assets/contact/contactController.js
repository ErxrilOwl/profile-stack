'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contactView.html',
            controller: 'contactController'
        });
    }])

    .controller('contactController', ['$scope', '$rootScope', '$http', 'BASEURL',
        function($scope, $rootScope, $http, BASEURL) {

        $scope.email = {};
        $scope.btnClickMessage = "";
        $scope.emailLoader = false;

        //if CondensedMode is enabled. Check the API now in case its back
        if($rootScope.CondensedMode){
            console.log("Contact - Condensed Mode Is Enabled. Checking If API Status Has Changed");
            $http.get(BASEURL + "/ping").then(function(response){
                var results = response.data.results;
                if(results.user.pingSuccess && results.project.pingSuccess && results.link.pingSuccess){
                    console.log("Contact - API Status Has Changed. Disabling Condensed Mode");
                    $rootScope.CondensedMode = false;
                }
            });
        }

        var onSuccess = function(response){
            //alert("SUCCESS: " + JSON.stringify(response));
            $scope.emailLoader = false;
            Materialize.toast('Your message has been successfuly sent', 4000, 'rounded');
        }

        var onFailure = function(response){
            alert("FAILURE: " + JSON.stringify(response));
            $scope.emailLoader = false;
        }

        $scope.sendEmail = function(){
            //alert(JSON.stringify($scope.email));
            $scope.emailLoader  =true;
            var data = $scope.email;
            $http.post(BASEURL + "/api/mail", data)
                .then(onSuccess, onFailure);
        }
    }]);