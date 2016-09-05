function RecipeService($http){
  var vm = this;
  vm.getRecipes = function(){
    return $http.get('/recipes.json');
  };

  vm.getRecipeById = function(id){
    return $http.get('/recipes/' + id + '.json');
  }

  vm.postRecipe = function(name, description, directions, recipe_tried, ingredient_attributes){
    return $http.post('/recipes', {
      name: name,
      description: description,
      directions: directions,
      recipe_tried: recipe_tried,
      ingredient_attributes: ingredient_attributes,
    })
  }
}

angular
  .module('app')
  .service('RecipeService', RecipeService)
