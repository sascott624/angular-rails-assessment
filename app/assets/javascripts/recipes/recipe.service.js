function RecipeService($http){
  var vm = this;
  vm.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  vm.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }

  vm.postRecipe = function(recipe){
    return $http.post('/recipes', {
      recipe: recipe,
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
