/* global angular, console */
(function() {

    var myApp = angular.module('myApp', []);

    myApp.directive('select2', function($parse) {
        return function(scope, element, attrs) {
            $(function() {
                var $el = $(element).select2();
                scope.$watch(attrs.select2, function(v) {
                    $el.select2('val', v);
                });
                $el.on('change', function(e) {
                    $parse(attrs.select2).assign(scope, e.val);
                    scope.$apply();
                });
            });
        };
    });

    myApp.controller('formController', function($scope) {

        $scope.$watch('girls + drinks', function(newValue, oldValue) {
            if ($scope.selectForm.$valid) {
                console.log("save that shit");
            }
        }, true);
    });
})();