'use strict';

var zombicoreApp = angular.module('zombicoreApp', [
  'ngRoute',
  'zombicore.controllers',
  'zombicore.directives'
]);

zombicoreApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'app/partials/rules.html',
            controller: 'RulesCtrl',
            title: 'Rules'
        }).
        when('/sheet', {
            templateUrl: 'app/partials/sheet.html',
            controller: 'SheetCtrl',
            title: 'Sheet'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);

zombicoreApp.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);