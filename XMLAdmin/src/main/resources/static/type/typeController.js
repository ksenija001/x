var app = angular.module('type.controllers', []);

app.controller('typeController', [
		'$scope',
		'$rootScope',
		'typeService',
		'$location',
		function($scope, $rootScope, typeService, $location) {

			$scope.addFlag = false;
			$scope.editFlag = false;
			var forEdit;

			typeService.getTypes(function(response) {
				$scope.types = response.data;
			}, function(response) {
				alert("Greska");
			});

			$scope.createType = function() {
				$scope.editFlag = false;
				$scope.addFlag = true;
			};

			$scope.addType = function(typeOfType) {
				$scope.addFlag = false;
				typeService.addType(typeOfType, function(response) {
					alert("Successfully added type!");
					$scope.types = response.data;
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.deleteType = function(type) {
				typeService.deleteType(type.id, function(response) {
					alert("Successfully deleted type!");
					$scope.types = response.data;
				}, function(response) {
					alert("Greska");
				});

			}

			$scope.writeEdit = function(type) {
				forEdit = type;
				$scope.addFlag = false;
				$scope.typeContent = forEdit.type;
				$scope.editFlag = true;

				console.log(JSON.stringify(forEdit));
			}

			$scope.edit = function(editedType) {

				$scope.editFlag = false;
				console.log(forEdit.id);
				typeService.editType(forEdit.id, editedType,
						function(response) {
							alert("Successfully edited type!");
							$scope.editedType = "";
							$scope.types = response.data;
						}, function(response) {
							alert("Greska");
						});
			}

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			};

		} ]);