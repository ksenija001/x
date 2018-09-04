var app = angular.module('admin.controllers', []);

app.controller('adminController', ['$scope','$rootScope', 'adminService', '$location',
  	function ($scope, $rootScope, adminService, $location) {
	
	
	$scope.signout = function() {
		$rootScope.USER = null;
		$location.path('signout');
	}
}]);