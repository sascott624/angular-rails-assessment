class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :quantity, :measurement
  # belongs_to :recipe
  # belongs_to :ingredient
end

# class RecipeIngredientSerializer < ActiveModel::Serializer
#   attributes :ingredient_id, :quantity, :measurement, :ingredient
#
#   def ingredient
#     a = Ingredient.find_by(id: object.ingredient_id)
#     IngredientSerializer.new(a, scope: scope, root: false)
#   end
# end
