function RecipeFormController($scope, ingredients, RecipeService, $filter, $state){
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

  vm.createRecipe = function(){
    vm.recipe.ingredient_ids = vm.selectedIngredients().map(function(ing){
      return ing.id;
    });
    RecipeService.postRecipe(vm.recipe).then(function(response){
      console.log(response);
    })
  }

};

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
