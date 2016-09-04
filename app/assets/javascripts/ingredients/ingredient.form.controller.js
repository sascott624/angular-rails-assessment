function IngredientFormController(IngredientService){
  var vm = this;
  vm.hello = 'ingredient form controller';

  vm.name = '';
  vm.food_group = '';

  vm.createIngredient = function(){
    IngredientService.postIngredient(vm.name, vm.food_group).then(function(response){
      console.log(response.data.id);
    })
  }
}

angular
  .module('app')
  .controller('IngredientFormController', IngredientFormController)
