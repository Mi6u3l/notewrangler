'use strict';

/**
 * @ngdoc overview
 * @name NoteWrangler
 * @description
 * # NoteWrangler
 *
 * Main module of the application.
 */
 angular.module('NoteWrangler', ['ngRoute'])
 .config(['$routeProvider', function($routeProvider) {
   $routeProvider

     .when('/notes', {
       templateUrl: 'templates/pages/notes/index.html'
     })
     .when('/users', {
       templateUrl: 'templates/pages/users/index.html'
     })
     ;

 }]);
