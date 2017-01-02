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
}])


.value('CondensedMode', false).

run(function($rootScope) {
  $rootScope.CondensedMode = false;
});