function IngredientService($http){
  this.getIngredients = function(){
    return $http.get('/ingredients.json');
  };

  this.getIngredientById = function(id){
    return $http.get('/ingredients/' + id + '.json');
  }
}

angular
  .module('app')
  .service('IngredientService', IngredientService)
