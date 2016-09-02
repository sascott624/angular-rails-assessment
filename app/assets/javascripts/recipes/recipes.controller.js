function RecipesController(recipes) {
    var vm = this;
    vm.recipes = recipes.data;
    // console.log(recipes.data);
}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
