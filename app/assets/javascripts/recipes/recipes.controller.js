function RecipesController(recipes, $filter) {
    var vm = this;
    vm.recipes = recipes.data;
    // console.log(recipes.data);
    vm.search = '';

    vm.refilter = function(){
      vm.filteredRecipes = $filter('filter')(vm.recipes, vm.search);
    };

    vm.refilter();
}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
