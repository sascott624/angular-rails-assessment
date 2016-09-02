function IngredientService($http){
  this.getIngredients = function(){
    console.log("testing ingredient service");
  };

  this.getIngredientById = function(id){
    return $http.get('/ingredients/' + id + '.json');
  }
}

angular
  .module('app')
  .service('IngredientService', IngredientService)
