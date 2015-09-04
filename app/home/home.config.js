(function () {
    'use strict';

    angular
        .module('app.home')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'HomeController',
                controllerAs: 'hc'
            });
    }

})();
