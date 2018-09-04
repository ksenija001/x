var services = angular.module('reservation.services', [ 'ngResource' ]);

services.service('reservationService', function($http) {
	return {
		getResservations : function(userId, onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/reservations/findReservationForUser/' + userId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
	
		cancelReservation : function(reservationId, onSuccess, onError) {
			var req = {
				method : 'DELETE',
				url : 'http://localhost:8090/reservations/cancelReservationById/' + reservationId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		
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