'use strict';

var zombicoreControllers = angular.module('zombicore.controllers', []);

zombicoreControllers.controller('RulesCtrl', ['$scope',
    function ($scope) {
    }]);

zombicoreControllers.controller('SheetCtrl', ['$scope',
    function ($scope) {
    }]);

zombicoreControllers.controller('HeaderCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])