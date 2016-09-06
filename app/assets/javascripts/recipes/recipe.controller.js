function RecipeController(recipe, RecipeService, $state) {
    var vm = this;
    vm.recipe = recipe.data;

    console.log(vm.recipe);

    vm.updateRecipe = function(){
      RecipeService.updateRecipe(vm.recipe).then(function(response){
        $state.go('home.recipes');
      });
    }
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
