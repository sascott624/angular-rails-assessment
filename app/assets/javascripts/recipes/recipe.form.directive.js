function RecipeFormDirective(){
  return {
    restrict: "E",
    templateUrl: 'recipes/recipe.form.html',
    controller: 'RecipeFormController as vm'
  }
}

angular
  .module('app')
  .directive('recipeFormDirective', RecipeFormDirective)
