# class RecipeIngredientSerializer < ActiveModel::Serializer
#   attributes :id, :name
# end

class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :ingredient_id, :quantity, :measurement, :ingredient

  def ingredient
    a = Ingredient.find_by(id: object.ingredient_id)
    IngredientSerializer.new(a, scope: scope, root: false)
  end
end
