'use strict';

var zombicoreControllers = angular.module('zombicore.controllers', []);

zombicoreControllers.controller('RulesCtrl', ['$scope',
    function ($scope) {
        $scope.difficulties = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        $scope.win = function (dc) {
            if (dc === 0) return 2;
            return dc + 1;
        }

        $scope.fumble = function (dc) {
            return Math.ceil(dc / 3);
        }

        $scope.rowClass = function (dc) {
            var fumble = $scope.fumble(dc);
            if (fumble === 0) {
                return 'active';
            } else if (fumble === 1) {
                return 'success';
            } else if (fumble === 2) {
                return 'warning';
            } else if (fumble === 3) {
                return 'danger';
            } else {
                return 'impossible';
            }
        }
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
