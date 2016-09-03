function DiscoverController(recipes, recipe){
  var vm = this;
  vm.recipe = recipe.data;

}

angular
  .module('app')
  .controller('DiscoverController', DiscoverController)
