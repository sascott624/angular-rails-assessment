class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions, :recipe_tried
  has_many :ingredients

end

# has_many :ingredients, serializer: RecipeIngredientSerializer
