var services = angular.module('addition.services', [ 'ngResource' ]);

services.service('additionService', function($http) {
	return {
		getAdditions : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/additionalServices',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		addAddition : function(service, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/additionalServices',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : service
			};
			$http(req).then(onSuccess, onError);
		},

		deleteAddition : function(additionId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/additionalServices/' + additionId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		editAddition : function(additionId, service, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/additionalServices/edit/' 
						+ additionId,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : service
			};
			$http(req).then(onSuccess, onError);
		}
		
	
		
		

	}
});