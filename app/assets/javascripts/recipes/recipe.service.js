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

  vm.updateRecipe = function(r){
    return $http.patch('/recipes/' + r.id, {
      recipe: r,
    });
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
