class RecipeIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  def ingredient_attributes=(attrs)
    ingredient = Ingredient.find_or_create_by(attrs)
    self.ingredient = ingredient
  end

end
