function IngredientFormController(IngredientService){
  var vm = this;
  vm.hello = 'ingredient form controller';

  vm.name = '';
  vm.food_group = '';

  vm.createIngredient = function(){
    alert('submitting form');
  }
}

angular
  .module('app')
  .controller('IngredientFormController', IngredientFormController)
