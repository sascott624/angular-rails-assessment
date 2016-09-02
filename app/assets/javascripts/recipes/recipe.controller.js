function RecipeController(recipe) {
    var vm = this;
    vm.recipe = recipe.data;
    console.log(vm.recipe);
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
