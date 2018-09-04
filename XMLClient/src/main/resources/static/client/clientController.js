var app = angular.module('client.controllers', []);

app.controller('clientController', ['$scope', '$rootScope', 'clientService', 'signinService', '$location',
  	function ($scope, $rootScope, clientService, signinService, $location) {
	
	
	clientService.getUser($rootScope.USER.id, 
			function(response){
				if(response.data !== null && response.data !== ""){
					$scope.user = response.data
				}
			},
			function(response){
				
			}
			
	);
	
	
		
		
	
	
	$scope.signout = function() {
		$rootScope.USER = null;
		
		signinService.signout( 
				function(response){
					$location.path('signout');
				},
				function(response){
					
				});
	}	
	
	
}]);