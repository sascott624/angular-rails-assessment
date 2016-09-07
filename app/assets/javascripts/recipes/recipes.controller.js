function RecipesController(recipes, $filter) {
    var vm = this;
    vm.recipes = recipes.data;
    vm.search = '';

    vm.refilter = function(){
      vm.filteredRecipes = $filter('filter')(vm.recipes, vm.search);
    };

    vm.refilter();

    vm.untried = function(){
      vm.filteredRecipes = $filter('tried')(vm.recipes, false);
    }

    vm.tried = function(){
      vm.filteredRecipes = $filter('tried')(vm.recipes, true);
    }


}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
