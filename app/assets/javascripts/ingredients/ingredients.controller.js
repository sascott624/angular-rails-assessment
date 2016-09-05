function IngredientsController(ingredients, $filter) {
    var vm = this;

    vm.ingredients = ingredients.data;
    vm.search = '';

    vm.refilter = function(){
      vm.filteredIngredients = $filter('filter')(vm.ingredients, vm.search);
    }

    vm.refilter();
}

angular
    .module('app')
    .controller('IngredientsController', IngredientsController)
