function IngredientController(ingredient, IngredientService, $state){
  var vm = this;
  vm.hello = "hello!";
  vm.ingredient = ingredient.data;

  vm.food_group = '';

  vm.updateIngredient = function(){
    IngredientService.patchIngredient(vm.ingredient, vm.food_group).then(function(response){
      $state.go('home.ingredients')
    })
  }
}

angular
  .module('app')
  .controller('IngredientController', IngredientController)
