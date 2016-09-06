function RecipeController(recipe, RecipeService) {
    var vm = this;
    vm.recipe = recipe.data;

    vm.updateRecipe = function(){
      console.log(vm.recipe);
    }
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
