function RecipeFormController(ingredients, RecipeService, $state){
  var vm = this;

  vm.ingredients = ingredients.data;

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

  vm.alert = function(){
    console.log(vm.recipe_ingredients);
  }


  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.name, vm.description, vm.directions, vm.recipe_tried, vm.recipe_ingredients).then(function(response){
      console.log(response);
    })
  }


  vm.addIngredient = function(){
    vm.recipe_ingredients.push({quantity: '',
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
