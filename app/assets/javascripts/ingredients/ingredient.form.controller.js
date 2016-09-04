function IngredientFormController(IngredientService, $state){
  var vm = this;
  vm.hello = 'ingredient form controller';

  vm.name = '';
  vm.food_group = '';

  vm.createIngredient = function(){
    IngredientService.postIngredient(vm.name, vm.food_group).then(function(response){
      $state.go('home.ingredients.id', {id: response.data.id});
    })
  }
}

angular
  .module('app')
  .controller('IngredientFormController', IngredientFormController)
