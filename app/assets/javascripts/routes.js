angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('recipes', {
          url: '/recipes',
          templateUrl: 'recipes/recipes.html',
          controller: 'RecipesController as recipes'
        })
        $urlRouterProvider.otherwise('home');
    });
