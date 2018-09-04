var app = angular.module('category.controllers', []);

app.controller('categoryController', [
		'$scope',
		'$rootScope',
		'categoryService',
		'$location',
		function($scope, $rootScope, categoryService, $location) {
			$scope.addFlag = false;
			$scope.editFlag = false;
			var forEdit;

			categoryService.getCategories(function(response) {

				$scope.categories = response.data;
			}, function(response) {
				alert("Cannot get categories.");
			});

			$scope.createCategory = function() {
				$scope.editFlag = false
				$scope.addFlag = true;
			};

			$scope.addCategory = function(typeOfCategory) {
				$scope.addFlag = false;
				categoryService.addCategory(typeOfCategory, function(response) {
					alert("Successfully added category!");
					$scope.categories = response.data;
				}, function(response) {
					alert("Cannot add category.");
				});
			};

			$scope.deleteCategory = function(category) {
				categoryService.deleteCategory(category.id, function(response) {
					alert("Successfully deleted category!");
					$scope.categories = response.data;
				}, function(response) {
					alert("Cannot delete category.");
				});

			}

			$scope.writeEdit = function(category) {
				forEdit = category;
				$scope.addFlag = false;
				$scope.categoryType = forEdit.type;
				$scope.editFlag = true;

				console.log(JSON.stringify(forEdit));
			}

			$scope.edit = function(editedCategory) {
				$scope.editFlag = false;

				console.log(forEdit.id);
				categoryService.editCategory(forEdit.id, editedCategory,
						function(response) {
							alert("Successfully edited category!");
							$scope.editedCategory = "";
							$scope.categories = response.data;
						}, function(response) {
							alert("Cannot edit category.");
						});
			}

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}

		} ]);