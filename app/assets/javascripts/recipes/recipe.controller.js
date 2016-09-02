function RecipeController(recipe) {
    var vm = this;
    vm.recipe = recipe.data;
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
