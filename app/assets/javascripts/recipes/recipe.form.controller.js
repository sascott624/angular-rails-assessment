function RecipeFormController(ingredients, RecipeService, $state){
  var vm = this;

  vm.ingredients = ingredients.data;

  vm.recipe = {
    name: '',
    description: '',
    directions: '',
    recipe_tried: false,
    ingredient_ids: [1,2]
  };

  vm.alert = function(){
    console.log(vm.recipe_ingredients);
  }

  vm.createRecipe = function(){
    RecipeService.postRecipe(vm.recipe).then(function(response){
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
