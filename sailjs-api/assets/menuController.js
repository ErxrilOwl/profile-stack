'use strict';

angular.module('myApp.menu', ['ngRoute'])



    .controller('menuController', ['$scope', '$http', '$log', 'BASEURL', 'USERID', 'CondensedMode',
        function($scope, $http, $log, BASEURL, USERID, CondensedMode) {
            console.log("Menu - Initializing");


        }]);