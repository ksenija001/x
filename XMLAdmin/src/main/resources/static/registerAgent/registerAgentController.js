var app = angular.module('registerAgent.controllers', []);

app.controller('registerAgentController', [
		'$scope',
		'$rootScope',
		'registerAgentService',
		'$location',
		function($scope, $rootScope, registerAgentService, $location) {

			$scope.register = function() {
				
				registerAgentService.register($scope.agent,
						function(response) {
							alert("Successful registration of agent!");
							$location.path('admin');
						},

						function(response) {
							alert(response.data.error);
						});
			};

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}
		} ]);