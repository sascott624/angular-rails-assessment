function IngredientFormController(){
  var vm = this;
  vm.hello = 'ingredient form controller';
}

angular
  .module('app')
  .controller('IngredientFormController', IngredientFormController)
