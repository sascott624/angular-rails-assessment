function RecipeFormController($scope, RecipeService){
  var vm = this;

  vm.name = "";
  vm.description = '';
  vm.directions = '';

}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
