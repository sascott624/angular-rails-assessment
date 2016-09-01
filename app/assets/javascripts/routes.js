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
        .state('recipes.id', {
          url: '/:id',
          template: '<p> some recipe directive </p>',
          controller: 'RecipesController as recipes'
        })
        .state('ingredients', {
          url: '/ingredients',
          templateUrl: 'ingredients/ingredients.html',
          controller: 'IngredientsController as ingredients'
        })
        .state('ingredients.id', {
          url: '/:id',
          template: '<p> some ingredient directive </p>',
          controller: 'IngredientsController as ingredients'
        })
        $urlRouterProvider.otherwise('home');
    });
