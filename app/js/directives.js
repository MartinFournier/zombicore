'use strict';

var zombicoreDirectives = angular.module('zombicore.directives', []);

zombicoreDirectives.directive('zcHeader', function () {
    return {
        templateUrl: 'app/partials/header.html',
        restrict: 'E'
    };
});

zombicoreDirectives.directive('zcFooter', function () {
    return {
        templateUrl: 'app/partials/footer.html',
        restrict: 'E'
    }
})

zombicoreDirectives.directive('zcAnalytics', function () {
    return {
        templateUrl: 'app/partials/analytics.html',
        restrict: 'E'
    }
})

zombicoreDirectives.directive('zcCountTable', function () {
    return {
        templateUrl: 'app/partials/count-table.html',
        restrict: 'E'
    }
})

zombicoreDirectives.directive('zcAbilitiesTable', function () {
    return {
        templateUrl: 'app/partials/abilities-table.html',
        restrict: 'E'
    }
})