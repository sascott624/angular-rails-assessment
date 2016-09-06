function RecipeService($http){
  var vm = this;
  vm.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  vm.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }

  vm.postRecipe = function(name, description, directions, recipe_tried, recipe_ingredients){
    return $http.post('/recipes', {
      name: name,
      description: description,
      directions: directions,
      recipe_tried: recipe_tried,
      recipe_ingredients: recipe_ingredients,
    })
  }

  // vm.updateRecipe = function(recipe){
  //   return $http.patch('/recipes/' + recipe.id, {
  //     recipe_tried: recipe.recipe_tried
  //   });
  // }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
