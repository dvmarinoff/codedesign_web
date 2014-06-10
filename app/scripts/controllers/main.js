'use strict';

var app = angular.module('codeApp');
app.controller('MainCtrl', function ($scope) {
    $scope.viewName = 'main view';
    $scope.ctrlName = 'main controller';
  });
app.controller('AboutCtrl', function($scope) {
    $scope.viewName = 'about view';
    $scope.ctrlName = 'about controller';
});
app.controller('ProjectsCtrl', function($scope) {
    $scope.viewName = 'projects view';
    $scope.ctrlName = 'projects controller';
    $scope.projects = projectsArray;
});
app.controller('BlogCtrl', function($scope) {
    $scope.posts = postsArray;
});
    
app.controller('ContactCtrl', function($scope) {
    $scope.viewName = 'contacts view';
    $scope.ctrlName = 'contacts controller';
});
