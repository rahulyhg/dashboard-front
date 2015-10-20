'use strict';

/* Controllers */

var dashboardApp = angular.module('dashboardApp', []);

dashboardApp.controller('DashboardCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    $scope.refresh = function() {
        $scope.getData();
    };

    $scope.getData = function() {
        $http.get('http://dashboard.local/index.php/ratp/').success(function(data) {
            $scope.ratpTimes = data;
        });
    };

    $scope.getData();

    $scope.intervalPromise = $interval(function() {
        $scope.refresh();
    }, 10000);

}]);
