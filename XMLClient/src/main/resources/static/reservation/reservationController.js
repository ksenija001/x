var app = angular.module('reservation.controllers', []);

app.controller('reservationController', [
		'$scope',
		'$rootScope',
		'reservationService',
		'messagesService',
		'$location',
		function($scope, $rootScope, reservationService, messagesService,
				$location) {
			$scope.write = false;
			$scope.writeC = false;
			var res;
			var resComment;

			reservationService.getResservations($rootScope.USER.id, function(
					response) {
				$scope.reservations = response.data;
			}, function(response) {
				alert("Greska")
			});

			$scope.cancelReservation = function(reservationId) {
				$scope.writeC = false;
				$scope.write = false;
				reservationService.cancelReservation(reservationId, function(
						response) {
					$scope.reservations = response.data;
				}, function(response) {
					alert("Greska");
				});
			};

			$scope.date = function(date) {
				var dat = new Date(date);
				return dat.toLocaleDateString();
			};

			$scope.writeMessage = function(rez) {
				$scope.write = true;
				$scope.writeC = false;
				$scope.toWrite = rez.accommodation.owner.username;
				res = rez;
			};

			$scope.sendMess = function(messageContent) {
				var message = {
					"senderId" : $rootScope.USER.id,
					"receiverId" : res.accommodation.owner.id,
					"content" : messageContent
				}
				console.log(JSON.stringify(message));

				messagesService.messageSend(message, function(response) {
					$scope.write = false;
					alert("Message sent successfully!");

					$location.path('sentMessages');
				}, function(response) {
					alert("Greska");
				});

			};

			$scope.writeComment = function(rez) {
				$scope.writeC = true;
				$scope.write = false;
				$scope.toWriteComment = rez.accommodation.title;
				resComment = rez;
			};

			$scope.sendComm = function(commentContent) {
				var comment = {
					"commentatorId" : $rootScope.USER.id,
					"accommodationId" : resComment.accommodation.id,
					"content" : commentContent
				}
				console.log(JSON.stringify(comment));

				reservationService.commentSend(comment, function(response) {
					$scope.writeComment = false;
					alert("Comment add successfully!");
					$scope.writeC = false;
					$location.path('accommodation');
				}, function(response) {
					alert("Greska");
				});

			};
			
			$scope.signout = function() {
				$rootScope.USER = null;
				$location.path('signout');
			}

		} ]);