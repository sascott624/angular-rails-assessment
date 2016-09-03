function RecipesController(recipes, $filter) {
    var vm = this;
    vm.recipes = recipes.data;
    vm.search = '';

    vm.refilter = function(){
      vm.filteredRecipes = $filter('filter')(vm.recipes, vm.search);
    };

    vm.refilter();

    vm.showNewRecipeForm = function(){
      document.getElementById('new_recipe_button').style.display = 'block';
    }
}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
