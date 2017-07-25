'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.about',
    'myApp.contact',
    'myApp.home',
    'myApp.menu'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

// Return to top function
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        $('.footer').css({"opacity": 1});
    } else {
        $('.footer').css({"opacity": 0.75});
    }
});
