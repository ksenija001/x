var app = angular.module('signup.controllers', []);

app.controller('signupController', [ '$scope', 'signupService', '$location',
		function($scope, signupService, $location) {
			$scope.signup = function() {
				signupService.signup($scope.user, function(response) {
					alert("Successfully registered user.");
					$location.path('signin'); // Koji state gadjam, koji url
				},

				function(response) {
					alert("The user already exists.");
					
				});
			}

		} ]);