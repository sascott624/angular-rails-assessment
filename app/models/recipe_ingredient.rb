class RecipeIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  # def ingredient=(name)
  #   ingredient = Ingredient.find_or_create_by(name: name)
  #   self.ingredient = ingredient
  # end

end
