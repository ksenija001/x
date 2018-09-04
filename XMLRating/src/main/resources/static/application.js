'use strict';

angular.module(
		'routerApp',
		[ 'ui.router', 'signin.services', 'signin.controllers',
			'signout.services', 'signout.controllers',
				'client.services', 'client.controllers',
				'accommodation.services', 'accommodation.controllers' ])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/signin');

			$stateProvider
			// AUTHENTICATION
			.state('signin', {
				url : '/signin',
				templateUrl : 'signin/signin.html',
				controller : 'signinController'
			})

			.state('signout', {
				url : '/signout',
				templateUrl : 'signout/signout.html',
				controller : 'signoutController'
			})

			.state('client', {
				url : '/client',
				templateUrl : 'client/client.html',
				controller : 'clientController'
			})

			.state('accommodation', {
				url : '/accommodation',
				templateUrl : 'accommodation/accommodation.html',
				controller : 'accommodationController'
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

