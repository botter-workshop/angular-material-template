(function () {
    'use strict';

    angular
        .module('app.shared.toolbar')
        .directive('toolbar', toolbar);

    toolbar.$inject = [];

    function toolbar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'shared/toolbar/toolbar.html',
            controller: 'ToolbarController',
            controllerAs: 'tc'
        }
    }

})();
