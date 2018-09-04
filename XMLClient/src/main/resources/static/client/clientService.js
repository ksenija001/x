var services = angular.module('client.services', ['ngResource']);

services.service('clientService', function ($http) {
    return {
    	getUser: function (idUser, onSuccess, onError) {
            var req = {
                method: 'GET',
                url: 'http://localhost:8090/users/' + idUser,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        },
        getUsers: function (onSuccess, onError) {
            var req = {
                method: 'GET',
                url: 'http://localhost:8090/users/',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        },
        signout: function ( onSuccess, onError) {
            var req = {
                method: 'GET',
                url: 'http://localhost:8090/authentication/signout',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }
        
        
    }
	

});