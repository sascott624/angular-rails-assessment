function RecipeController(recipe, RecipeService) {
    var vm = this;
    vm.recipe = recipe.data;

    console.log(vm.recipe);

    vm.updateRecipe = function(){
      RecipeService.updateRecipe(vm.recipe).then(function(response){
        console.log(response);
      });
    }
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
