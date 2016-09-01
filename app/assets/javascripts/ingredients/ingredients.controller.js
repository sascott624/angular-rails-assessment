function IngredientsController() {
    var ingredients = this;
    ingredients.test = 'this is where all ingredients should go';
}

angular
    .module('app')
    .controller('IngredientsController', IngredientsController)
