angular
    .module('app')
    .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('home.recipes', {
          url: '/recipes',
          templateUrl: 'recipes/recipes.html',
          controller: 'RecipesController as vm',
          resolve: {
            recipes: function(RecipeService){
              return RecipeService.getRecipes();
            }
          }
          // here we'll add a resolve to request @recipes from /recipes.json
          // the data (recipes) will be injected into our RecipesController
          // we can then iterate through the recipes in recipes.html
        })
        .state('recipe', {
          url: '/recipe/:id',
          templateUrl: 'recipes/recipe.html',
          controller: 'RecipesController as recipes'
          // here we'll add a resolve to request a @recipe with the id from the
          // $state.params
          // this recipe we'll inject into RecipeController, which we can then
          // render in recipe.html
        })
        .state('home.ingredients', {
          url: '/ingredients',
          templateUrl: 'ingredients/ingredients.html',
          controller: 'IngredientsController as ingredients'
        })
        .state('ingredient', {
          url: '/ingredients/:id',
          template: '<p> some ingredient directive </p>',
          controller: 'IngredientsController as ingredients'
        })
        $urlRouterProvider.otherwise('home');
    });
