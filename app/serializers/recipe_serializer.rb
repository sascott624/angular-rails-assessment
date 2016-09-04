class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions, :recipe_tried
  has_many :recipe_ingredients, serializer: RecipeIngredientSerializer

end

# has_many :ingredients, serializer: RecipeIngredientSerializer
