/* global angular, console */
(function() {

    var myApp = angular.module('myApp', []);

    myApp.directive('select2', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs) {
                $(function() {
                    var $el = $(element).select2();
                    scope.$watch(attrs.ngModel, function(v) {
                        $el.select2('val', v);
                    });
                });
            }
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