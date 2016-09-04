class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions, :tried
  has_many :recipe_ingredients, serializer: RecipeIngredientSerializer

end

# has_many :ingredients, serializer: RecipeIngredientSerializer
