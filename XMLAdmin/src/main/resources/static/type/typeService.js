var services = angular.module('type.services', [ 'ngResource' ]);

services.service('typeService', function($http) {
	return {
		getTypes : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/accommodationTypes',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		

		addType : function(type, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/accommodationTypes',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : type
			};
			$http(req).then(onSuccess, onError);
		},

		deleteType : function(typeId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/accommodationTypes/' + typeId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		editType : function(typeId, type, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/accommodationTypes/edit/'
						+ typeId,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : type
			};
			$http(req).then(onSuccess, onError);
		}
	}
});