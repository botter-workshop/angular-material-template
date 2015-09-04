(function () {
    'use strict';

    angular
        .module('app.shared.toolbar')
        .provider('Toolbar', Toolbar);

    Toolbar.$inject = [];

    function Toolbar() {
        var provider;

        provider = {
            $get: $get
        };

        return provider;

        $get.$inject = ['$mdSidenav'];

        function $get($mdSidenav) {
            var factory;

            factory = {
                title: null,
                toggleSideNav: toggleSideNav
            };

            return factory;

            function toggleSideNav(id) {
                $mdSidenav(id).toggle();
            }
        }
    }

})();
