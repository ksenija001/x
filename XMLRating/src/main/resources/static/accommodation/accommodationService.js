var services = angular.module('accommodation.services', [ 'ngResource' ]);

services
		.service(
				'accommodationService',
				function($http) {
					return {
						getAccommodations : function(clientId, onSuccess,
								onError) {
							var req = {
								method : 'GET',
								url : 'http://localhost:8090/reservations/findConfirmedReservationAccommodationsForUser/'
										+ clientId,
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
						},
						
						getApprovedComments : function(accommodationId, onSuccess, onError) {
							var req = {
								method : 'GET',
								url : 'http://localhost:8090/comments/approvedCommentsForAccommodation/' + accommodationId,
								headers : {
									'Content-Type' : 'application/json'
								},
							};
							$http(req).then(onSuccess, onError);
						},
						
						getSumRating : function(accommodationId, onSuccess, onError) {
							var req = {
								method : 'GET',
								url : 'http://localhost:8090/rating/sumRatingForAccommodation/' + accommodationId,
								headers : {
									'Content-Type' : 'application/json'
								},
							};
							$http(req).then(onSuccess, onError);
						},
						setRatingForAccommodation : function(rating, onSuccess, onError) {
							var req = {
								method : 'POST',
								url : 'http://localhost:8090/rating/setRatingForAccommodation',
								headers : {
									'Content-Type' : 'application/json'
								},
								data : rating
							};
							$http(req).then(onSuccess, onError);
						},
			
						ratingSearchForAccommodation : function(search, onSuccess, onError) {
							var req = {
								method : 'PUT',
								url : 'http://localhost:8090/rating/ratingSearch',
								headers : {
									'Content-Type' : 'application/json'
								},
								data : search
							};
							$http(req).then(onSuccess, onError);
						}
					}
				});