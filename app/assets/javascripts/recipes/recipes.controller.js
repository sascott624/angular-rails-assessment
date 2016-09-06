function RecipesController(recipes, $filter) {
    var vm = this;
    vm.recipes = recipes.data;
    vm.search = '';

    vm.refilter = function(){
      vm.filteredRecipes = $filter('filter')(vm.recipes, vm.search);
    };

    vm.refilter();

    vm.untried = function(){
      vm.filteredRecipes = $filter('untried')(vm.recipes, true);
    }

    vm.tried = function(){
      vm.filteredRecipes = $filter('tried')(vm.recipes, false);
    }


}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
