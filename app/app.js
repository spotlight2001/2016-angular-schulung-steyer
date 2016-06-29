var app = angular.module('passenger-app', ['ui.router']);

app.constant('baseUrl', 'http://www.angular.at/api');




app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/app/home/home.html'
    }).state('passengerSearch', {
        url: '/passenger-search?name',
        templateUrl: '/app/passenger/passenger-search.html',
        controller: 'PassengerSearchController',
        controllerAs: 'vm'
    }).state('passengerEdit', {
        url: '/passenger-edit/:id',
        templateUrl: '/app/passenger/passenger-edit.html',
        controller: 'PassengerEditController',
        controllerAs: 'vm'
    });

})




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