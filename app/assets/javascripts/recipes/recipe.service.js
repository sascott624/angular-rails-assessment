function RecipeService($http){
  this.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  this.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
