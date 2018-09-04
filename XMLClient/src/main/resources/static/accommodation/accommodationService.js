var services = angular.module('accommodation.services', [ 'ngResource' ]);

services.service('accommodationService', function($http) {
	return {
		getAccommodations : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/accommodations/nonBusy',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		getOrdinarySearchAccommodation : function(search, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/accommodations/ordinarySearch',
				data : search,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		getAdvancedSearchAccommodation : function(search, onSuccess, onError) {
			var req = {
				method : 'PUT',
				url : 'http://localhost:8090/accommodations/advancedSearch',
				data : search,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		getAdditionalServices : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/additionalServices',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},

		getCategoryTypes : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/categoryTypes',
				headers : {
					'Content-Type' : 'application/json'
				}
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
		
		getAccommodationTypes : function(onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/accommodationTypes',
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		getTermins : function(accommodationId, onSuccess, onError) {
			var req = {
				method : 'GET',
				url : 'http://localhost:8090/prices/priceForAccommodation/' + accommodationId,
				headers : {
					'Content-Type' : 'application/json'
				}
			};
			$http(req).then(onSuccess, onError);
		},
		reservate : function(data, onSuccess, onError) {
			var req = {
				method : 'POST',
				url : 'http://localhost:8090/reservations/createReservation',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : data
			};
			$http(req).then(onSuccess, onError);
		}

	}
});