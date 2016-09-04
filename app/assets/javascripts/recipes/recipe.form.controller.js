function RecipeFormController(RecipeService, $state){
  var vm = this;

  vm.name = "";
  vm.description = '';
  vm.directions = '';
  vm.recipe_tried = false;
  
  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.recipe_tried).then(function(response){
      console.log(response);
    })
    // console.log(vm.recipe_tried);
  }
}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
