function RecipeController() {
    var vm = this;
    vm.hello = "testing";
}

angular
    .module('app')
    .controller('RecipeController', RecipeController)
