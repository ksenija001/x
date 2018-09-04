var services = angular.module('signup.services', [ 'ngResource' ]);
services.service('signupService', function($http) {
	return {

		signup : function(user, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/authentication/signup',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : user
			};
			$http(req).then(onSuccess, onError);
		}

	}
});