function RecipesController(recipes) {
    var vm = this;
    // vm.recipes = recipes.data;
    console.log(recipes);
}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
