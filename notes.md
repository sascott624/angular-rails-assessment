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
RECIPE
-name
-description
-directions
-user_id

-has_many :recipe_ingredients
-has_many *ingredients []* through: recipe_ingredients



INGREDIENTS
-name
-type (i.e. dairy, fruit, vegetable, meat)

-has_many :recipe_ingredients
-has_many *recipes []* through: :recipe_ingredients



RECIPE-INGREDIENTS
-recipe_id
-ingredient_id
-quantity (i.e. 3)
-measurement (i.e. tbs, lbs, cups)



USER
-first_name
-last_name
(devise for email, pw)
