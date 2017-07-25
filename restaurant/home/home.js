'use strict';

angular.module('myApp.home', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;

         // Fetching data from JSON files
        $http.get('data/breakfast.json')
            .then(function (data) {
                $scope.breakfast = data.data.breakfastArray;
            });
        $http.get('data/lunch.json')
            .then(function (data) {
                $scope.lunch = data.data.lunchArray;
            });
        $http.get('data/dinner.json')
            .then(function (data) {
                $scope.dinner = data.data.dinnerArray;
            });
        $http.get('data/events.json')
            .then(function (data) {
                $scope.events = data.data.eventsArray;
            });
    }]);