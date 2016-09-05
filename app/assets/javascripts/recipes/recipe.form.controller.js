function RecipeFormController(RecipeService, IngredientService, $state){
  var vm = this;

  vm.ingredientsList = IngredientService.getIngredients().then(function(response){
    vm.ingredients = response.data;
  });


  vm.name = "";
  vm.description = '';
  vm.directions = '';
  vm.recipe_tried = false;
  vm.recipe_ingredients = [
    {name: '',
    quantity: '',
    measurement: ''},
  ];


  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.recipe_tried, vm.recipe_ingredients).then(function(response){
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
