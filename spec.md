# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
- [x] Must contain some sort of nested views
(SPA has a 'home' view, nested within which are the 'home.recipes', 'home.ingredients', and 'home.discover' views. These views are nested further with 'home.recipes.id' and 'home.ingredients.id', which display a given recipe/ingredient based on the $state params)
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
(both recipe list and ingredient list can be searched - this functionality is available in the 'home.recipes' and 'home.ingredients' views. In the recipes index, the user can view only tried recipes / only untried recipes)
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
(User can mark a recipe as 'tried')
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
- [x] Data should be validated in Angular before submission
(ingredient fields are required and have a minlength of 3 - user is unable to click 'submit' unless these fields are valid)
- [x] Must talk to the Rails backend using $http and Services
(In order to grab the recipe list, the ingredient list, and each individual recipe / ingredient, an $http.get call is made (either to /recipes.json, /recipes/:id.json, /ingredients.json, or /ingredients/:id.json). These calls are performed through corresponding functions in the RecipeService or IngredientService (i.e. RecipeService.getRecipes(), etc.))
- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
