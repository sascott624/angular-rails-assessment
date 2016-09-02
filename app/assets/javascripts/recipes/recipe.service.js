function RecipeService(){
  this.getRecipes = function(){
    console.log("testing recipe service")
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
