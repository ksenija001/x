var app = angular.module('client.controllers', []);

app.controller('clientController', [ '$scope', '$rootScope', 'clientService',
		'$location', function($scope, $rootScope, clientService, $location) {

			clientService.getUser($rootScope.USER.id, function(response) {
				if (response.data !== null && response.data !== "") {
					$scope.user = response.data
				}
			}, function(response) {

			}

			);
		} ]);