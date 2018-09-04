var services = angular.module('comments.services', [ 'ngResource' ]);

services.service('commentsService', function($http) {
	return {

		commentSend : function(comment, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/comments/createComment',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : comment
			};
			$http(req).then(onSuccess, onError);
		}
	}
});