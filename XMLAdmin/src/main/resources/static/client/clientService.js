var services = angular.module('client.services', [ 'ngResource' ]);

services.service('clientService', function($http) {
	return {
		getUsers : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/users',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		block : function(userId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/users/block/'+userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		activate : function(userId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/users/activate/'+userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		deactivate : function(userId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/users/deactivate/'+userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		unblock : function(userId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/users/unblock/'+userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		deleteUser : function(userId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/users/'+userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		}
	}
});