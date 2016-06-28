var app = angular.module('flight-app', []);

app.constant('baseUrl', 'http://www.angular.at/api');





app.factory('globalHttpErrorHandler', function($q, $rootScope) {
    return {
        'request': function(config) {
            return config;
        },
        'requestError': function(rejection) {
            return $q.reject(rejection);
        },
        'response': function(response) {
            return response;
        },
        'responseError': function(rejection) {

            $rootScope.error = "Fehler beim Abrufen von Daten: "
                + rejection.status
                + " " + rejection.statusText;

            return $q.reject(rejection);
        }
    };
});

app.config(function($httpProvider) {
    $httpProvider.interceptors.push('globalHttpErrorHandler');
});