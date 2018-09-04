'use strict';

angular.module(
		'routerApp',
		[ 'ui.router', 'signin.services', 'signin.controllers',
				'signout.controllers', 'signout.services', 'admin.services',
				'admin.controllers', 'client.services', 'client.controllers',
				'comment.services', 'comment.controllers', 'category.services',
				'category.controllers', 'addition.services',
				'addition.controllers', 'type.services', 'type.controllers',
				'registerAgent.services', 'registerAgent.controllers' ])
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

			.state('admin', {
				url : '/admin',
				templateUrl : 'admin/admin.html',
				controller : 'adminController'
			})

			.state('client', {
				url : '/client',
				templateUrl : 'client/client.html',
				controller : 'clientController'
			})

			.state('comment', {
				url : '/comment',
				templateUrl : 'comment/comment.html',
				controller : 'commentController'
			}).state('addition', {
				url : '/addition',
				templateUrl : 'addition/addition.html',
				controller : 'additionController'
			}).state('category', {
				url : '/category',
				templateUrl : 'category/category.html',
				controller : 'categoryController'
			}).state('type', {
				url : '/type',
				templateUrl : 'type/type.html',
				controller : 'typeController'
			})

			.state('registerAgent', {
				url : '/registerAgent',
				templateUrl : 'registerAgent/registerAgent.html',
				controller : 'registerAgentController'
			})

		});
