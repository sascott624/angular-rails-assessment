angular
    .module('app', ['templates', 'ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
        }
        $stateProvider.state(homeState);

        $urlRouterProvider.otherwise('/');
    });
