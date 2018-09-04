var app = angular.module('client.controllers', []);

app.controller('clientController', [ '$scope', '$rootScope', 'clientService',
		'$location', function($scope, $rootScope, clientService, $location) {

			clientService.getUsers(function(response) {

				$scope.users = response.data;
			}, function(response) {
				alert("Greska");
			});

			$scope.activate = function(user) {
				clientService.activate(user.id, function(response) {
					$scope.users = response.data;
					alert("User is activated!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.deactivate = function(user) {
				clientService.deactivate(user.id, function(response) {
					$scope.users = response.data;
					alert("User is deactivated!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.block = function(user) {
				clientService.block(user.id, function(response) {
					$scope.users = response.data;
					alert("User is blocked!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.unblock = function(user) {

				clientService.unblock(user.id, function(response) {
					$scope.users = response.data;
					alert("User is unblocked!");
				}, function(response) {
					alert("Greska");
				});
			};
			
			$scope.deleteUser = function(user) {

				clientService.deleteUser(user.id, function(response) {
					$scope.users = response.data;
					alert("User is deleted!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}
		} ]);
