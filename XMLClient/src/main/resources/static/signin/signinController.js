var app = angular.module('signin.controllers', []);

app.controller('signinController', [
		'$scope',
		'$rootScope',
		'signinService',
		'$location',
		function($scope, $rootScope, signinService, $location) {

			$scope.signin = function() {
				signinService.signin($scope.user, function(response){
						
									$scope.state = undefined;
									if (response.data !== null
											&& response.data !== "") {
										$rootScope.USER = response.data;
										
										if($rootScope.USER.blocked == true){
											alert("User is blocked.");
											$rootScope.USER = null;
											$location.path('signin');
										}
										console.log("Logovan je "
												+ $rootScope.USER.id + " rola "
												+ $rootScope.USER.role);
										if ($rootScope.USER.role == 'CLIENT') {
											console.log("Client");
											localStorage.setItem("user", JSON.stringify($rootScope.USER));
											$location.path('client');
										} else {
											alert("Please, log in as client.");
											$rootScope.USER = null;
										}
									} else {
										 alert("User must be activated.");
									}
								}, function(response) {
									 alert("User must be activated.");
								});
			}


		} ]);