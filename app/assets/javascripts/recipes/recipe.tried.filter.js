function Tried(){
  return function(recipes, tried){
    return recipes.filter(function (recipe) {
      return recipe.recipe_tried === tried;
    });
  }
}


angular
  .module('app')
  .filter('tried', Tried)
