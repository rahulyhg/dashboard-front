'use strict';

/* Controllers */

var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('DashboardCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    $scope.refresh = function() {
        $scope.getData();
    };

    $scope.getData = function() {
        $http.get('http://dashboard.local/ratp/bus').success(function(data) {
            $scope.busTimes = data;
        });

        $http.get('http://dashboard.local/ratp/tram').success(function(data) {
            $scope.tramTimes = data;
        });

        $http.get('http://dashboard.local/sncf').success(function(data) {
            $scope.sncfTimes = data;
        })
    };

    $scope.getData();

    $scope.intervalPromise = $interval(function() {
        $scope.refresh();
    }, 10000);

}]);
