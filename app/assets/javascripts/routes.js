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
        .state('home.new-recipe', {
          url: '/new-recipe',
          templateUrl: 'recipes/recipe.form.html',
          controller: 'RecipeFormController as vm',
        })
        .state('home.recipes.id', {
          url: '/:id',
          templateUrl: 'recipes/recipe.html',
          controller: 'RecipeController as vm',
          resolve: {
            recipe: function($stateParams, RecipeService){
              return RecipeService.getRecipeById($stateParams.id);
            }
          }
        })
        .state('home.discover', {
          url: '/discover',
          templateUrl: 'recipes/recipe.html',
          controller: 'DiscoverController as vm',
          resolve: {
            recipes: function(RecipeService){
              return RecipeService.getRecipes();
            },
            recipe: function(RecipeService, recipes){
              var quantity = Math.floor(Math.random() * recipes.data.length) + 1
              return RecipeService.getRecipeById(quantity);
            }
          }
        })
        .state('home.ingredients', {
          url: '/ingredients',
          templateUrl: 'ingredients/ingredients.html',
          controller: 'IngredientsController as vm',
          resolve: {
            ingredients: function(IngredientService){
              return IngredientService.getIngredients();
            }
          }
        })
        .state('home.ingredients.id', {
          url: '/:id',
          templateUrl: 'ingredients/ingredient.html',
          controller: 'IngredientController as vm',
          resolve: {
            ingredient: function($stateParams, IngredientService){
              return IngredientService.getIngredientById($stateParams.id);
            }
          }
        })
        .state('home.new-ingredient', {
          url: '/new-ingredient',
          templateUrl: 'ingredients/ingredient.form.html',
          controller: 'IngredientCongroller as vm',
        })

        $urlRouterProvider.otherwise('home');
    });
