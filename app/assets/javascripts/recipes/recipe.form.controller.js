function RecipeFormController($scope, RecipeService){
  var vm = this;

  vm.name = "";
  vm.description = '';
  vm.directions = '';

  vm.submit = function(){
    alert('form submitted!');
  }
}

angular
  .module('app')
  .controller('RecipeFormController', RecipeFormController)
