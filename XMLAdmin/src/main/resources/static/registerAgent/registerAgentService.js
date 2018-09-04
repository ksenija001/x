var services = angular.module('registerAgent.services', [ 'ngResource' ]);

services.service('registerAgentService', function($http) {
	return {
		register : function(agent, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/authentication/signupAgent',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : agent
			};
			$http(req).then(onSuccess, onError);
		},
	}
});