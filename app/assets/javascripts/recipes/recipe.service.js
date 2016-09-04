function RecipeService($http){
  var vm = this;
  vm.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  vm.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }

  vm.postRecipe = function(name, description, directions, tried){
    return $http.post('/recipes', {
      name: name,
      description: description,
      directions: directions,
      tried: tried,
      // recipe_ingredients: recipe_ingredients,
    })
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
