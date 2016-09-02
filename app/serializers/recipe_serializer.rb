class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions
  has_one :user, serializer: RecipeUserSerializer
  has_many :recipe_ingredients, serializer: RecipeIngredientSerializer

end

# has_many :ingredients, serializer: RecipeIngredientSerializer
