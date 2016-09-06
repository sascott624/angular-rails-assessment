function RecipeFormController(ingredients, RecipeService, $filter,$state){
  var vm = this;

  vm.ingredients = ingredients.data;

  vm.recipe = {
    name: '',
    description: '',
    directions: '',
    recipe_tried: false,
    ingredient_ids: [ ],
  };

  vm.selectedIngredients = function selectedIngredients(){
    return $filter('filter')(vm.ingredients, { selected: true })
  };

  vm.alert = function(){
    console.log(vm.selectedIngredients());
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
