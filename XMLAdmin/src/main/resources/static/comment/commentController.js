var app = angular.module('comment.controllers', []);

app.controller('commentController', [ '$scope', '$rootScope', 'commentService',
		'$location', function($scope, $rootScope, commentService, $location) {

			commentService.getComments(function(response) {

				$scope.comments = response.data;
			}, function(response) {
				alert("Greska");
			});

			$scope.approve = function(comment) {
				commentService.approve(comment.id, function(response) {
					$scope.comments = response.data;
					alert("Comment is approved!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.refuse = function(comment) {

				commentService.refuse(comment.id, function(response) {
					$scope.comments = response.data;
					alert("Comment is refused!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.deleteComment = function(comment) {

				commentService.deleteComment(comment.id, function(response) {
					$scope.comments = response.data;
					alert("Comment is deleted!");
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}
		} ]);