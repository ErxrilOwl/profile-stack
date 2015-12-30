'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
  'myApp.home',
  'myApp.contact',
  'myApp.projects',
  'myApp.blog',
  'myApp.about',
  'myApp.version',
  'myApp.menu'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
//constant('BASEURL', 'http://45.55.237.98:8050')
//constant('BASEURL', 'http://bensoer.com:8050').
constant('BASEURL', 'http://localhost:1337').
constant('USERID', '1')

.value('CondensedMode', false).

run(function($rootScope) {
  $rootScope.CondensedMode = false;
});