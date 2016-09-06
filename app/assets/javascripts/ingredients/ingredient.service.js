function IngredientService($http){
  this.getIngredients = function(){
    return $http.get('/ingredients.json');
  };

  this.getIngredientById = function(id){
    return $http.get('/ingredients/' + id + '.json');
  };

  this.postIngredient = function(name, food_group){
    return $http.post('/ingredients', {
     name: name,
     food_group: food_group
    });
  }

  this.patchIngredient = function(ingredient, food_group){
    return $http.patch('/ingredients/' + ingredient.id, {
      food_group: food_group,
    })
  }
}

angular
  .module('app')
  .service('IngredientService', IngredientService)
