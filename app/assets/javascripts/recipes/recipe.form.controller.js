function RecipeFormController(RecipeService){
  var vm = this;
  // vm.recipes = RecipeService.getRecipes();

  console.log(vm.recipes.map(function(recipe, index){
    return recipe.user.first_name + recipe.user.last_name;
  }));

}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
