var services = angular.module('comment.services', [ 'ngResource' ]);

services.service('commentService', function($http) {
	return {
		deleteComment : function(commentId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/comments/delete/' + commentId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		approve : function(commentId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/comments/approve/' + commentId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		refuse : function(commentId, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/comments/refuse/' + commentId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
		getComments : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/comments',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		}
	}
});