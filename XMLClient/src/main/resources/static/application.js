'use strict';

angular.module('routerApp', ['ui.router', 
	'signin.services','signin.controllers',
	'signup.controllers', 'signup.services',
	'signout.controllers', 'signout.services',
	'client.controllers', 'client.services',
	'messages.controllers', 'messages.services',
	'accommodation.controllers', 'accommodation.services',
	'reservation.controllers', 'reservation.services',
	'comments.controllers', 'comments.services'
	])
.config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/signin');
        
        $stateProvider
        // AUTHENTICATION
        .state('signin', {
        	url : '/signin',
          	templateUrl : 'signin/signin.html',
          	controller : 'signinController'
         })
         
         .state('signup', {
        	url : '/signup',
          	templateUrl : 'signup/signup.html',
          	controller : 'signupController'
         })
          
         .state('signout', {
        	url : '/signout',
        	templateUrl : 'signout/signout.html',
          	controller : 'signoutController'
         })
         
         // CLIENT
         .state('client', {
        	url : '/client',
          	templateUrl : 'client/client.html',
          	controller : 'clientController'
         })
         
         .state('messages', {
        	url : '/messages',
          	templateUrl : 'messages/messages.html',
          	controller : 'messagesController'
         })
         
         .state('receivedMessages', {
        	url : '/receivedMessages',
          	templateUrl : 'messages/receivedMessages.html',
          	controller : 'messagesController'
         })
      
         .state('sentMessages', {
        	url : '/sentMessages',
          	templateUrl : 'messages/sentMessages.html',
          	controller : 'messagesController'
         })
      
        
          .state('accommodation', {
        	url : '/accommodation',
          	templateUrl : 'accommodation/accommodation.html',
          	controller : 'accommodationController'
         })
         
          .state('accommodationLogout', {
        	url : '/accommodationLogout',
          	templateUrl : 'accommodation/accommodationLogout.html',
          	controller : 'accommodationController'
         })
         
         

         .state('reservation', {
         	url : '/reservation',
           	templateUrl : 'reservation/reservation.html',
           	controller : 'reservationController'
          })
          
        
}).run(["$rootScope", "$state", function ($rootScope,$state) {
	//console.log(!angular.isDefined($rootScope.USER));
	//console.log(JSON.parse(localStorage.getItem("user")));
	
    if(!angular.isDefined($rootScope.USER) && localStorage.getItem("user")){
        // UserInfo exists in localstorate but not on $rootScope. This means the page was reloaded or the user is returning.
        $rootScope.USER = JSON.parse(localStorage.getItem("user"));
        //console.log(localStorage.getItem("user"));

    }else if(!angular.isDefined($rootScope.USER) && !localStorage.getItem("user")){
        // User is not logged at all. Send him back to login page
    	localStorage.clear();
    	$state.go("signin");
    
    }else if(angular.isDefined($rootScope.USER)){
        // User is logged in. You can run some extra validations in here.
    }
	/*
        $rootScope.USER = {
            role:"CINEMA_THEATRE_ADMIN"
        }*/
    }]);

