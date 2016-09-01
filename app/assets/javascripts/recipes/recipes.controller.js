function RecipesController() {
    var recipes = this;
    recipes.test = 'this is where all recipes should go';
}

angular
    .module('app')
    .controller('RecipesController', RecipesController)
