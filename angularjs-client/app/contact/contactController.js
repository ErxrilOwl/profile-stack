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