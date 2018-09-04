var services = angular.module('category.services', [ 'ngResource' ]);

services.service('categoryService', function($http) {
	return {
		getCategories : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/categoryTypes',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		addCategory : function(category, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/categoryTypes',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : category
			};
			$http(req).then(onSuccess, onError);
		},
		
		deleteCategory : function(categoryId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/categoryTypes/' + categoryId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		editCategory : function(categoryId, service, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/categoryTypes/edit/' + categoryId,
				headers : {
					'Content-Type' : 'application/json'
				},
				data : service
			};
			$http(req).then(onSuccess, onError);
		}
	}
	
	
});