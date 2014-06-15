'use strict';

var app = angular.module('codeApp');
app.controller('MainCtrl', ['$scope',
	function ($scope) {
		$scope.ctrlName = 'main controller';
	}
]);
app.controller('AboutCtrl', ['$scope',
	function ($scope) {
		$scope.ctrlName = 'about controller';
	}
]);
app.controller('ProjectsCtrl', ['$scope',
	function ($scope) {
		$scope.projects = projectsArray;
	}
]);
app.controller('BlogCtrl', ['$scope',
	function ($scope) {
		$scope.posts = postsArray;
	}
]);

app.controller('ContactCtrl', ['$scope',
	function ($scope) {
		$scope.ctrlName = 'contacts controller';
	}
]);