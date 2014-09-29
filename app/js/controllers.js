'use strict';

var zombicoreControllers = angular.module('zombicore.controllers', []);

zombicoreControllers.controller('RulesCtrl', ['$scope',
    function ($scope) {
    }]);

zombicoreControllers.controller('SheetCtrl', ['$scope',
    function ($scope) {
        $scope.abilities = ['Constitution', 'Agility', 'Intellect', 'Charisma'];

        $scope.nbSkillRows = 9;
        $scope.nbItemRows = 14;

        $scope.range = function (n) {
            return new Array(parseInt(n));
        }
    }]);

zombicoreControllers.controller('HeaderCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])