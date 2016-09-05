# class IngredientSerializer < ActiveModel::Serializer
#   attributes :id, :name, :food_group
#   # has_many :recipes, serializer: RecipesIngredientSerializer
# end

class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_group

  # has_many :recipe_ingredients, serializer: RecipeIngredientSerializer
end
