'use strict';

var app = angular
  .module('codeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
    })
    .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
