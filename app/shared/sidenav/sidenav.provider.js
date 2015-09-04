(function () {
    'use strict';

    angular
        .module('app.shared.sidenav')
        .provider('SideNav', SideNav);

    SideNav.$inject = [];

    function SideNav() {
        var provider, links;

        links = [];

        provider = {
            $get: $get,
            registerLink: registerLink
        };

        return provider;

        $get.$inject = ['$mdSidenav'];

        function $get($mdSidenav) {
            var factory;

            factory = {
                links: links,
                toggle: toggle
            };

            return factory;

            function toggle(id) {
                if (!$mdSidenav(id).isLockedOpen()) {
                    $mdSidenav(id).toggle();
                }
            }
        }

        function registerLink(link) {
            links.push(link);
        }
    }

})();
