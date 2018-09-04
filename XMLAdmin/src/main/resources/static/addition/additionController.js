var app = angular.module('addition.controllers', []);

app.controller('additionController', [
		'$scope',
		'$rootScope',
		'additionService',
		'$location',
		function($scope, $rootScope, additionService, $location) {
			$scope.addFlag = false;
			$scope.editFlag = false;
			var forEdit;

			additionService.getAdditions(function(response) {

				$scope.additions = response.data;
			}, function(response) {
				alert("Greska");
			});

			$scope.createAddition = function() {
				$scope.editFlag=false;
				$scope.addFlag = true;
			};

			$scope.addAddition = function(typeOfAddition) {
				$scope.addFlag = false;
				additionService.addAddition(typeOfAddition, function(response) {
					alert("Successfully added addition!");
					$scope.additions = response.data;
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.deleteAddition = function(addition) {
				additionService.deleteAddition(addition.id, function(response) {
					alert("Successfully deleted addition!");
					$scope.additions = response.data;
				}, function(response) {
					alert("Greska");
				});

			}

			$scope.writeEdit = function(addition) {
				$scope.addFlag = false;
				forEdit = addition;
				$scope.serviceType = forEdit.service;
				$scope.editFlag = true;

				console.log(JSON.stringify(forEdit));
			}

			$scope.edit = function(editedType) {
				$scope.editFlag = false;
				console.log(forEdit.id);
				additionService.editAddition(forEdit.id, editedType, function(
						response) {
					alert("Successfully edited addition!");
					$scope.editedType = "";
					$scope.additions = response.data;
				}, function(response) {
					alert("Greska");
				});
			}

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			};
		} ]);