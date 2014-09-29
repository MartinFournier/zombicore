'use strict';

var zombicoreDirectives = angular.module('zombicore.directives', []);

zombicoreDirectives.directive('zcHeader', function () {
    return {
        templateUrl: 'app/partials/header.html',
        restrict: 'E',
        replace: true
    };
});

zombicoreDirectives.directive('zcFooter', function () {
    return {
        templateUrl: 'app/partials/footer.html',
        restrict: 'E',
        replace: true
    }
})

zombicoreDirectives.directive('zcCountTable', function () {
    return {
        templateUrl: 'app/partials/count-table.html',
        restrict: 'E',
        replace: true
    }
})

zombicoreDirectives.directive('zcAbilitiesTable', function () {
    return {
        templateUrl: 'app/partials/abilities-table.html',
        restrict: 'E',
        replace: true
    }
})

zombicoreDirectives.directive('zcEditable', function () {
    return {
        template: "<div contenteditable='true' class='text-write'></div>",
        restrict: 'E',
        replace: true
    }
})