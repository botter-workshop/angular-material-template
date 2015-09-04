(function () {
    'use strict';

    angular
        .module('app.shared.sidenav')
        .directive('sidenav', sidenav);

    sidenav.$inject = [];

    function sidenav() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'shared/sidenav/sidenav.html',
            controller: 'SideNavController',
            controllerAs: 'snc'
        }
    }

})();
