function IngredientController(){
  var vm = this;
  this.hello = "hello!";
}

angular
  .module('app')
  .controller('IngredientController', IngredientController)
