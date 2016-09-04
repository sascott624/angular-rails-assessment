function RecipeFormController(RecipeService, $state){
  var vm = this;

  vm.name = "";
  vm.description = '';
  vm.directions = '';
  vm.recipe_tried = false;
  vm.ingredients = [
    {name: '',
    quantity: '',
    measurement: ''},
  ];


  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.recipe_tried, vm.ingredients).then(function(response){
      console.log(response);
    })
  }


  vm.addIngredient = function(){
    vm.ingredients.push({
      name: '',
      quantity: '',
      measurement: ''
    });
  }
}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
