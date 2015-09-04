(function () {
    'use strict';

    angular
        .module('app.shared.toolbar')
        .controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['$state', 'Toolbar'];

    function ToolbarController($state, Toolbar) {
        var vm = this;

        vm.menuVisible = menuVisible;
        vm.title = title;
        vm.toggleSideNav = toggleSideNav;

        function menuVisible() {
            return true;
        }

        function title() {
            return Toolbar.title;
        }

        function toggleSideNav(id) {
            Toolbar.toggleSideNav(id);
        }
    }

})();
