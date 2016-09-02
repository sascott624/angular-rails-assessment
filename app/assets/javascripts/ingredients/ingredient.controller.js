function IngredientController(ingredient){
  var vm = this;
  // vm.hello = "hello!";
  vm.ingredient = ingredient.data;
  console.log(vm.ingredient);
}

angular
  .module('app')
  .controller('IngredientController', IngredientController)
