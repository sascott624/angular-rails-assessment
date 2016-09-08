class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_group
  has_many :recipes

  # has_many :recipe_ingredients
  # class RecipeIngredientSerializer < ActiveModel::Serializer
  #   attributes :quantity, :measurement
  # end
end
