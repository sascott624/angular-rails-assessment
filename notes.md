navbar - contain links to sign up / login / logout / home

homepage - shows recipes / ingredients / discover
|--------- here's where we get our nested routes

home.recipes
|--------- call to recipes#index, render ng-repeat, link to individuals

home.ingredients
|--------- call to ingredients#index, render ng-repeat, link to individuals

home.discover
|--------- linked to recipescontroller, grabs random recipe to display


schema:

USER
-first_name
-last_name
(devise for email, pw)

has_many :recipes
has_many :favorite_recipes
has_many :favorites, through: :favorite_recipes, source: :recipe


RECIPE
-name
-description
-directions
-user_id

belongs_to :user
has_many :favorite_recipes
has_many :favorited_by, through: :favorite_recipes, source: :user
has_many :recipe_ingredients
has_many *ingredients []* through: recipe_ingredients


FAVORITE-RECIPES
-user_id
-recipe_id

belongs_to :user
belongs_to :recipe


INGREDIENTS
-name
-type (i.e. dairy, fruit, vegetable, meat)

has_many :recipe_ingredients
has_many *recipes []* through: :recipe_ingredients


RECIPE-INGREDIENTS
-recipe_id
-ingredient_id
-quantity (i.e. 3)
-measurement (i.e. tbs, lbs, cups)

belongs_to :recipe
belongs_to :ingredient



===============================================================================
We have *most* of our recipe functionality up and running. TODO:
1. Add prev / next buttons?
2. Add angular form to create a new recipe (need to get our ingredients up and running first! Should be able to add/create ingredients during recipe creation - this also means we have to update our recipe_params to include ingredients_attributes, etc.)
3. Need to display a recipe's ingredients in /recipes/:id - need to generate ingredients serializer / recipe-ingredients serializer in order to get access to this relationship via json
4. Discover - select a recipe at random!

5. Ingredient functionality (http calls, index, show view, search, create)

6. User (signup/login/logout, favorites, dynamically update data through favoriting a recipe)
