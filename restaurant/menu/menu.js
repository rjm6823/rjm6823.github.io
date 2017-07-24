'use strict';

angular.module('myApp.menu', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/menu', {
            templateUrl: 'menu/menu.html',
            controller: 'MenuCtrl'
        });
    }])

    .controller('MenuCtrl', ['$scope', '$http', function ($scope, $http) {
        // Fetch JSON data for meal offerings
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

        // Initializing visibility variables
        $scope.breakfastFlag = true;
        $scope.lunchFlag = true;
        $scope.dinnerFlag = true;
        $scope.type = "All Offered Meals";
        $scope.description = "Availability of meals depends on the time of day";

        // Functions controlling visible sections
        $scope.allShow = function () {
            $scope.breakfastFlag = true;
            $scope.lunchFlag = true;
            $scope.dinnerFlag = true;
            $scope.type = "All Offered Meals";
            $scope.description = "Availability of meals depends on the time of day";
        };

        $scope.breakfastShow = function () {
            $scope.breakfastFlag = true;
            $scope.lunchFlag = false;
            $scope.dinnerFlag = false;
            $scope.type = "Breakfast";
            $scope.description = "Served from 8:00am - 11:00am";
        };

        $scope.lunchShow = function () {
            $scope.breakfastFlag = false;
            $scope.lunchFlag = true;
            $scope.dinnerFlag = false;
            $scope.type = "Lunch";
            $scope.description = "Served from 11:00am - 4:00pm.";
        };

        $scope.dinnerShow = function () {
            $scope.breakfastFlag = false;
            $scope.lunchFlag = false;
            $scope.dinnerFlag = true;
            $scope.type = "Dinner";
            $scope.description = "Served from 4:00pm - 9:00pm.";
        };

        // Return to top function
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.goToTop').fadeIn();
            } else {
                $('.goToTop').fadeOut();
            }
        });
        $('.goToTop').click(function () {
            $("html, body").animate({scrollTop: 0}, 750);
            return false;
        });
    }]);