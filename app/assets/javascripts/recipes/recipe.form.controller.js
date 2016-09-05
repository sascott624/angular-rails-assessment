function RecipeFormController(RecipeService, IngredientService, $state){
  var vm = this;


  vm.name = "";
  vm.description = '';
  vm.directions = '';
  vm.recipe_tried = false;
  vm.recipe_ingredients = [
    {quantity: '',
    measurement: '',
    ingredient: {
      id: '',
      name: "",
      food_group: ''
    }},
  ];


  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.recipe_tried, vm.recipe_ingredients).then(function(response){
      console.log(response);
    })
  }


  vm.addIngredient = function(){
    vm.ingredients.push({quantity: '',
    measurement: '',
    ingredient: {
      id: '',
      name: "",
      food_group: ''
    }});
  };
};

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
