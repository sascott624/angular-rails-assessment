function IngredientController(ingredient){
  var vm = this;
  vm.hello = "hello!";
  vm.ingredient = ingredient.data;
}

angular
  .module('app')
  .controller('IngredientController', IngredientController)
