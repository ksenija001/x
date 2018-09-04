var app = angular.module('accommodation.controllers', []);

app.controller('accommodationController', [
		'$scope',
		'$rootScope',
		'accommodationService',
		'$location',
		function($scope, $rootScope, accommodationService, $location) {
			$scope.searchCity = null;
			$scope.searchCountry = null;
			$scope.searchStartDate = null;
			$scope.searchEndDate = null;
			$scope.searchAdress = null;
			$scope.searchNumberOfPerson = null;
			$scope.selectedCategoryType = null;
			$scope.selectedAccommodationType = null;
			$scope.hideTableForTermins = true;

			accommodationService.getAccommodations(function(response) {
				$scope.accommodations = response.data;
			}, function(response) {
				alert("Greska");
			});

			accommodationService.getAdditionalServices(function(response) {
				$scope.additionalServices = response.data;
			}, function(response) {
				alert("Greska");
			});

			accommodationService.getCategoryTypes(function(response) {
				$scope.categoryTypes = response.data;
			}, function(response) {
				alert("Greska");
			});

			accommodationService.getAccommodationTypes(function(response) {
				$scope.accommodationTypes = response.data;
			}, function(response) {
				alert("Greska");
			});

			$scope.ordinarySearch = function() {
				var search = {
					"city" : $scope.searchCity,
					"country" : $scope.searchCountry,
					"adress" : $scope.searchAdress,
					"numberOfPerson" : $scope.searchNumberOfPerson,
					"startDate" : $scope.searchStartDate,
					"endDate" : $scope.searchEndDate
				}
				console.log(JSON.stringify(search));

				accommodationService.getOrdinarySearchAccommodation(search,
						function(response) {
							$scope.accommodations = response.data;
						}, function(response) {
							alert("Greska");
						});
			};

			$scope.advancedSearch = function() {
				if ($scope.selectedAccommodationType == null) {
					var type = null;
				} else {
					var type = $scope.selectedAccommodationType.id;
				}

				if ($scope.selectedCategoryType == null) {
					var category = null;
				} else {
					var category = $scope.selectedCategoryType.id;
				}

				var additionalSelected = [];

				$('input[type=checkbox]').each(function() {
					if (this.checked == true) {
						additionalSelected.push(this.getAttribute("value"));
					}
				});

				var search = {
					"city" : $scope.searchCity,
					"country" : $scope.searchCountry,
					"adress" : $scope.searchAdress,
					"numberOfPerson" : $scope.searchNumberOfPerson,
					"startDate" : $scope.searchStartDate,
					"endDate" : $scope.searchEndDate,
					"type" : type,
					"category" : category,
					"additional" : additionalSelected
				}

				accommodationService.getAdvancedSearchAccommodation(search,
						function(response) {
							$scope.accommodations = response.data;
						}, function(response) {
							alert("Greska");
						});
				console.log(JSON.stringify(search));
			};

			$scope.details = function(accommodationId, accommodationDetail) {

				console.log($scope.searchStartDate + " datum "
						+ $scope.searchEndDate);

				$scope.detailForTerminAccommodation = accommodationDetail;
				$scope.hideTableForTermins = false;
				accommodationService.getTermins(accommodationDetail.id,
						function(response) {
							$scope.accommodationForTermins = response.data;
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

			$scope.date = function(date) {
				var dat = new Date(date);
				return dat.toLocaleDateString();
			};

			$scope.reservate = function(termin, detailForTerminAccommodation) {

				if ($rootScope.USER == null) {
					alert("You must log in.");
					$location.path('signin');
				} else {
					var reservation = {
						"reservedById" : $rootScope.USER.id,
						"accommodationId" : detailForTerminAccommodation.id,
						"startDate" : termin.startDate,
						"endDate" : termin.endDate

					}
					console.log("Rezervacija " + JSON.stringify(reservation));

					accommodationService.reservate(reservation, function(
							response) {
						alert("Reservation is successful!");
						$location.path('reservation');
					}, function(response) {
						alert("The place has already been reserved!");
					});
				}

			};

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}

		} ]);