angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('welcome', {
          url: '/welcome',
          templateUrl: 'welcome/welcome.html',
          controller: 'WelcomeController as welcome'
        })
        $urlRouterProvider.otherwise('welcome');
    });
