function IngredientService($http){
  this.getIngredients = function(){
    return $http.get('/ingredients.json');
  };

  this.getIngredientById = function(id){
    return $http.get('/ingredients/' + id + '.json');
  };

  this.saveIngredient = function(name, food_group){
    return $http.post('/ingredients', {
     name: name,
     food_group: food_group
    });
  }
}

angular
  .module('app')
  .service('IngredientService', IngredientService)
