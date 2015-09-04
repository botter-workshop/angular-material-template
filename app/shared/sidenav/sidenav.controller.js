(function () {
    'use strict';

    angular
        .module('app.shared.sidenav')
        .controller('SideNavController', SideNavController);

    SideNavController.$inject = ['$state', 'SideNav'];

    function SideNavController($state, SideNav) {
        var vm = this;

        vm.links = links;

        vm.toggle = toggle;
        vm.visible = visible;

        function links() {
            return SideNav.links;
        }

        function toggle(id) {
            SideNav.toggle(id);
        }

        function visible() {
            return true;
        }
    }

})();
