function RecipeService($http){
  var vm = this;
  vm.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  vm.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }

  vm.postRecipe = function(name, description, directions, recipe_tried, ingredients){
    return $http.post('/recipes', {
      name: name,
      description: description,
      directions: directions,
      recipe_tried: recipe_tried,
      ingredients: ingredients,
    })
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
