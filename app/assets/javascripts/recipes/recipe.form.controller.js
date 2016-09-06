function RecipeFormController($scope, ingredients, RecipeService, $filter, $state){
  var vm = this;

  vm.ingredients = ingredients.data;

  vm.recipe = {
    name: '',
    description: '',
    directions: '',
    recipe_tried: false,
    recipe_ingredients_attributes: [{
      quantity: '',
      measurement: '',
      ingredient: {
        name: ''
      }
    }],
  };

  vm.addIngredient = function(){
    vm.recipe.recipe_ingredients_attributes.push({quantity: '',
    measurement: '',
    ingredient: {
      name: "",
    }});
  };

  vm.selectedIngredients = function selectedIngredients(){
    return $filter('filter')(vm.ingredients, { selected: true })
  };

  vm.createRecipe = function(){
    // console.log(vm.recipe);
    RecipeService.postRecipe(vm.recipe).then(function(response){
      console.log(response);
    })
  }

};

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
