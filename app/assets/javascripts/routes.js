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
        })
        .state('recipe', {
          url: '/recipes/:id',
          templateUrl: 'recipes/recipe.html',
          controller: 'RecipeController as vm',
          resolve: {
            recipe: function($stateParams, RecipeService){
              return RecipeService.getRecipeById($stateParams.id);
            }
          }
        })
        .state('home.ingredients', {
          url: '/ingredients',
          templateUrl: 'ingredients/ingredients.html',
          controller: 'IngredientsController as ingredients',
          resolve: {
            ingredients: function(IngredientService){
              return IngredientService.getIngredients();
            }
          }
        })
        .state('ingredient', {
          url: '/ingredients/:id',
          template: '<p> some ingredient directive </p>',
          controller: 'IngredientsController as ingredients'
        })
        $urlRouterProvider.otherwise('home');
    });
