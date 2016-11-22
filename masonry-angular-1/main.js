'use strict';

angular.module('app', []).controller('mainCtrl', function($scope, $http){

	$scope.initial = 5;
	$scope.titles = {};

	$http.get('../masonry-data.json').then(function(data) {
		$scope.tiles = data.data;
	}, function(error) {
			console.log("Error fetching JSON");
	});
	$scope.load = function() {
		$scope.initial = 9;
		$scope.hide = true;
	};
});
