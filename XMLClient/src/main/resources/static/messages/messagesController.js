var app = angular.module('messages.controllers', []);

// Ha ha mora da se slaze po redu
app.controller('messagesController', ['$scope', '$rootScope', 'messagesService','clientService', '$location',
  	function ($scope, $rootScope, messagesService, clientService, $location) {
	
	messagesService.getSentMessages($rootScope.USER.id,
			function(response){
				$scope.sentMessages = response.data;
			},
			function(response){
				alert("Greska");
			}
	);
	
	clientService.getUsers(
			function(response){

				$scope.users = response.data;
			},
			function(response){
				alert("Greska");
			}
	);
	
	messagesService.getReceivedMessages($rootScope.USER.id,
			function(response){

				$scope.receivedMessages = response.data;
			},
			function(response){
				alert("Greska");
			}
	);
}]);