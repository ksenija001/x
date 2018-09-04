var app = angular.module('accommodation.controllers', []);

app.controller('accommodationController', [
		'$scope',
		'$rootScope',
		'accommodationService',
		'$location',
		function($scope, $rootScope, accommodationService, $location) {
			$scope.rating = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
			$scope.hideTable = true;
			$scope.writeC = false;
			$scope.wComm = false;
			var resComment;
			var accId;

			accommodationService.getAccommodations($rootScope.USER.id,
					function(response) {
						$scope.accommodations = response.data;
					}, function(response) {
						alert("Cannot find accommodations.");
					});

			$scope.details = function(accommodationId, accommodationDetail) {
				$scope.detailForTerminAccommodation = accommodationDetail;
				$scope.hideTable = false;
				$scope.wComm = true;
				accId = accommodationId;
				console.log("Accommodation " + accommodationId);

				accommodationService.getSumRating(accommodationId, function(
						response) {

					$scope.ratingSum = response.data;
				}, function(response) {
					alert("Greska");
				});
				accommodationService.getApprovedComments(accommodationId,
						function(response) {

							$scope.comments = response.data;
						}, function(response) {
							alert("Greska");
						});
			};

			$scope.writeComment = function(detailForTerminAccommodation) {
				$scope.writeC = true;
				$scope.toWriteComment = detailForTerminAccommodation.title;
				resComment = detailForTerminAccommodation;
			};

			$scope.sendComm = function(commentContent) {
				var comment = {
					"commentatorId" : $rootScope.USER.id,
					"accommodationId" : resComment.id,
					"content" : commentContent
				}
				console.log(JSON.stringify(comment));

				accommodationService.commentSend(comment, function(response) {
					$scope.writeComment = false;
					alert("Comment add successfully!");
					$scope.writeC = false;
					$scope.wComm = false;
					$location.path('accommodation');
				}, function(response) {
					alert("Greska");
				});

			};

			$scope.setRate = function(selectedRate) {
				console.log($scope.selectedRate);

				var rating = {
					"ratedById" : $rootScope.USER.id,
					"accommodationId" : accId,
					"rate" : selectedRate
				}

				accommodationService.setRatingForAccommodation(rating,
						function(response) {

							$scope.ratingSum = response.data;
							accommodationService.getAccommodations($rootScope.USER.id,
									function(response) {
										$scope.accommodations = response.data;
									}, function(response) {
										alert("Cannot find accommodations.");
									});

						}, function(response) {
							alert("You must set rating.");
						});
			}

			$scope.searchByRating = function(searchRating) {
				var ratingSearch = {
					"userId" : $rootScope.USER.id,
					"rating" : searchRating
				}

				accommodationService.ratingSearchForAccommodation(ratingSearch,
						function(response) {

							$scope.accommodations = response.data;
						}, function(response) {
							alert("Set value for rating search!");
						});
			}

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}
		} ]);