function RecipeFormController(RecipeService, $state){
  var vm = this;

  vm.name = "";
  vm.description = '';
  vm.directions = '';
  vm.tried = false;

  vm.submit = function(){
    alert('form submitted!');
  }

  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.tried).then(function(response){
      console.log(response);
    })
  }
}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
