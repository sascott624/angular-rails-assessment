class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :directions
  has_one :user, serializer: RecipeUserSerializer
  has_many :ingredients, serializer: RecipeIngredientSerializer
end
